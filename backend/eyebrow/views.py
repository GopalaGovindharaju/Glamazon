from rest_framework.decorators import api_view
from rest_framework.response import Response
from openai import OpenAI
import cv2
import numpy as np
import requests
from django.core.files.uploadedfile import InMemoryUploadedFile
import os

@api_view(['POST'])
def getFilteredEyebrow(request):
    if request.method == 'POST':
        data = request.data
        Original_Image = request.FILES.get('original_image', None)
        UserName = data.get('username')
        prompt = data.get('style')

        if Original_Image:
            # Call the function to process the image
            modified_image = fetch_and_remove_eyebrows(Original_Image)

            if modified_image is not None:
                main(Original_Image, modified_image, prompt)
                # Save the modified image to a specific path
                #modified_image_path = 'C:/Users/WELCOME/Downloads/mask_image.png'  # Specify the desired path here
                #cv2.imwrite(modified_image_path, modified_image)
                #print("gr",type(modified_image))

                # Return the path to the modified image
                return Response({'message': 'Image processed successfully', 'modified_image_path': modified_image_path})
            else:
                return Response({'error': 'Error processing image'})

        else:
            return Response({'error': 'No image file provided'})

def main(image, mask, prompt):
    #api_key = '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'
    #client = OpenAI(api_key = api_key)

    image_data = image.read()
    _, mask_data = cv2.imencode('.png', mask)
    mask1 = mask_data.tobytes()

    response = client.images.edit(
    image=image_data,
    mask=mask1,
    prompt="A girl with green hairstyle",
    n=2,
    size="1024x1024"
    )

    print(response)


def fetch_and_remove_eyebrows(image_file):
    # Define the API endpoint
    url = "https://www.ailabapi.com/api/portrait/analysis/face-key-points"
    # Prepare payload and headers
    payload = {'max_face_num': 1, 'face_field': 'age,gender,landmark72'}
    image_data = image_file.read()  # Read the image data once
    files = [('image', ('file', image_data, 'application/octet-stream'))]
    headers = {'ailabapi-api-key': 'fH0mMe7AReJO65UdigJR01oi9FDcExpL3yKIqa2LqQPjYwWnGYryuVhWM9pSKflG'}  # Assuming api_key is defined somewhere

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
        return None
