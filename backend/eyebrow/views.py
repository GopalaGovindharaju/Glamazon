from rest_framework.decorators import api_view
from rest_framework.response import Response

import cv2
import numpy as np
import requests
from openai import OpenAI
import os
from django.conf import settings
from django.core.files.storage import default_storage
import uuid
from PIL import Image
from rest_framework import status
from .models import Eyebrow
from django.core.files.base import ContentFile


@api_view(['POST'])
def getFilteredEyebrow(request):
    if request.method == 'POST':
        data = request.data
        Original_Image = request.FILES.get('original_image', None)
        UserName = data.get('username')
        prompt1 = data.get('style')
        prompt = f'a human with {prompt1} eyebrows'
        original_image_size_image = Original_Image
        def store_image(image_url, filename, UserName, OriginalImage):
            # Download the image from the URL
            response = requests.get(image_url)

            if response.status_code == 200:
                # Get the binary data from the response
                image_data = response.content

                # Save the image data to the specified file
                with open(filename, 'wb') as image_file:
                    image_file.write(image_data)

                # Get or create the HairStyle object based on UserName
                hairstyle_info = Eyebrow(UserName = UserName, OrginalImage = OriginalImage)
                hairstyle_info.FilteredImage.save(filename, ContentFile(image_data), save=True)

                hairstyle_info.save()
                current_site = request.build_absolute_uri('/')

                return (current_site + hairstyle_info.FilteredImage.url)
            else:
                print(f"Failed to download image from openai.")
        
        if Original_Image:
            # Call the function to process the image
            modified_image = fetch_and_remove_eyebrows(Original_Image)

            if modified_image is not None:
                original_image_path = os.path.join(settings.MEDIA_ROOT, 'original', Original_Image.name)
                default_storage.save(original_image_path, Original_Image)
                with default_storage.open(original_image_path, 'rb') as f:
                    image = Image.open(f)
                    
                    png_image = image.convert('RGBA')

                    png_image_path = os.path.splitext(original_image_path)[0] + '.png'

                    with default_storage.open(png_image_path, 'wb') as png_file:
                        png_image.save(png_file, format='PNG')

                default_storage.delete(original_image_path)
                modified_image_folder = os.path.join(settings.MEDIA_ROOT, 'modified')
                if not os.path.exists(modified_image_folder):
                    os.makedirs(modified_image_folder)

                modified_image_path = os.path.join(modified_image_folder, 'modified_image.png')
                cv2.imwrite(modified_image_path, modified_image)
                print("Original image path:", png_image_path)
                print("Modified image path:", modified_image_path)
                transformed_image_url = main(png_image_path,modified_image_path,prompt)
                print(transformed_image_url)
                filteredImage = store_image(transformed_image_url, f'{UserName}_output_image.png', UserName, Original_Image)
                response_data = {
                            'filteredImage' : filteredImage,
                        }

                return Response(response_data, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Error processing image'})

        else:
            return Response({'error': 'No image file provided'})


def main(image, mask, prompt):
    
    client = OpenAI(api_key=api_key)
    try:
        response = client.images.edit(
            image=open(image, "rb"),
            mask=open(mask, "rb"),
            prompt=prompt,
            n=1,
            size="1024x1024"
        )
        print(response)
        return response.data[0].url
    except Exception as e:
        print("Error occurred:", e)

def fetch_and_remove_eyebrows(image_file):
    # Define the API endpoint
    url = "https://www.ailabapi.com/api/portrait/analysis/face-key-points"
    # Prepare payload and headers
    payload = {'max_face_num': 1, 'face_field': 'age,gender,landmark72'}
    image_data = image_file.read()  # Read the image data once
    files = [('image', ('file', image_data, 'application/octet-stream'))]
    headers = {'ailabapi-api-key': settings.APIKEY}  # Assuming api_key is defined somewhere

    # Make API request
    response = requests.post(url, headers=headers, data=payload, files=files)
    response_data = response.json()

    # Check if response is successful
    if 'result' in response_data and 'face_list' in response_data['result']:
        # Convert image data to numpy array
        nparr = np.frombuffer(image_data, np.uint8)
        # Decode image
        image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        # Get the landmark points from API response
        landmark_points = response_data['result']['face_list'][0]['landmark72']

        # Extract x-coordinates of left and right eyebrow landmarks
        left_eyebrow_x = [int(point['x']) for point in landmark_points[22:29]]
        right_eyebrow_x = [int(point['x']) for point in landmark_points[39:45]]

        # Determine the bounding box around the eyebrows
        leftmost_x = min(left_eyebrow_x)
        rightmost_x = max(right_eyebrow_x)
        top_y = min([int(point['y']) for point in landmark_points[22:29]])
        bottom_y = max([int(point['y']) for point in landmark_points[22:29]])

        height_margin = 4  # Adjust the height margin as needed
        top_y -= height_margin
        bottom_y += height_margin
        
        # Create a mask for the area between eyebrows
        mask = np.ones_like(image[:, :, 0]) * 255
        mask[top_y:bottom_y, leftmost_x:rightmost_x] = 0

        # Create a copy of the image and make the area between eyebrows transparent
        image_with_transparency = image.copy()
        image_with_transparency = cv2.cvtColor(image_with_transparency, cv2.COLOR_BGR2BGRA)
        image_with_transparency[:, :, 3] = mask

        # Return the modified image
        return image_with_transparency

    else:
        print("credits issue")
        return None

@api_view(['POST'])
def getGender(request):
    if request.method == 'POST':
        data = request.data
        Original_Image = request.FILES.get('original_image', None)
        if Original_Image:
            url = "https://www.ailabapi.com/api/portrait/analysis/face-key-points"
            # Prepare payload and headers
            payload = {'max_face_num': 1, 'face_field': 'gender'}
            image_data = Original_Image.read()  # Read the image data once
            files = [('image', ('file', image_data, 'application/octet-stream'))]
            headers = {'ailabapi-api-key': settings.APIKEY}  # Assuming api_key is defined somewhere

            # Make API request
            response = requests.post(url, headers=headers, data=payload, files=files)
            response_data = response.json()
            print(response_data)
            return Response(response_data)
        else:
            return Response("Image is not got")
    else:
        return Response("invalid request")