from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.files.base import ContentFile
import requests
import time
import json
import base64
from io import BytesIO
from PIL import Image
from .models import Makeup

@api_view(['POST'])
def getmakeup(request):
    if request.method == 'POST':
        data = request.data

        Original_Image = request.FILES.get('original_image',None)
        UserName = data.get('username')
        resource_type = data.get('resource_type')
        strength = data.get('strength')

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
                makeup_info = Makeup(UserName = UserName, OrginalImage = OriginalImage)
                makeup_info.FilteredImage.save(filename, ContentFile(image_data), save=True)

                makeup_info.save()
                current_site = request.build_absolute_uri('/')

                return (current_site + makeup_info.FilteredImage.url)
            else:
                print(f"Failed to download image from {image_url}. Status code: {response.status_code}")
        
        if Original_Image:
            image_data = Original_Image.read()
            url = "https://www.ailabapi.com/api/portrait/effects/face-makeup"
            api_key = 'Ox9HLvarADiunIz2KrpmGcInP6EQ3djYk9Jdes8Sg2l4Cu8TLsVaSbFmxNHoMzGP'
            headers = {'ailabapi-api-key': api_key}

            files = {'image': (Original_Image.name, image_data, Original_Image.content_type)}
            print(Original_Image.name, Original_Image.content_type)

            payload = {
                    'resource_type': resource_type,
                    'strength': strength
                }
            print(payload)

            response = requests.request("POST", url, headers=headers, data=payload, files=files)
            

            if response.status_code == 200:
                data = response.json()
                error_code = data.get('error_code', -1)

                if error_code == 0:
                    
                    image_url = data['data'].get('image_url', '')  # Extract image_url from data
                    if image_url:
                        filteredImage = store_image(image_url, f'{UserName}_output_image.png', UserName, Original_Image)
                    else:
                        print("Image URL not found in the response.")
                    response_data = {
                        'filteredImage' : filteredImage,
                    }
                    return Response(response_data, status=status.HTTP_200_OK)
                    
                else:
                    print(f"Error code {error_code}: {data.get('error_msg', 'Unknown error')}")
                    return Response('error code')
            else:
                return Response(response)
        else: 
            return Response("Image is not Uploaded")
        