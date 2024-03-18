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
from .models import LipColor

@api_view(['POST'])
def getFilteredLipcolor(request):
    if request.method == 'POST':
        data = request.data

        Original_Image = request.FILES.get('original_image',None)
        UserName = data.get('username')
        def store_image(image_data, filename, UserName, OriginalImage):
            # Save the image data to the specified file
            with open(filename, 'wb') as image_file:
                image_file.write(image_data)

            lipcolor_info = LipColor(UserName=UserName, OrginalImage=OriginalImage)
            lipcolor_info.FilteredImage.save(filename, ContentFile(image_data), save=True)
            lipcolor_info.save()

            current_site = request.build_absolute_uri('/')
            return (current_site + lipcolor_info.FilteredImage.url)
        
        if Original_Image:
            image_data = Original_Image.read()
            url = "https://www.ailabapi.com/api/portrait/effects/lips-color-changer"
            api_key = 'LgtC4g71J3uoGk9HpYEhpfSQjz9cBIVVUqW0LkEDyBiFF52GOI2xNtTQrARlTMza'
            headers = {'ailabapi-api-key': api_key}

            files = {'image': (Original_Image.name, image_data, Original_Image.content_type)}
            print(Original_Image.name, Original_Image.content_type)

            payload = {
                        "lip_color_infos": '[{"rgba":{"r":255,"g":99,"b":71,"a":100}}]'
                      }

            response = requests.request("POST", url, headers=headers, data=payload, files=files)
            

            if response.status_code == 200:
                data = response.json()
                error_code = data.get('error_code', -1)

                if error_code == 0:
                    resultimage = data.get('result_image', '')
                    decoded_image = base64.b64decode(resultimage)
                    image = Image.open(BytesIO(decoded_image))
                    image.show()
                    output_image_url = store_image(decoded_image, f'{UserName}_output_image.png', UserName, Original_Image)
                    return Response({"output_image_url": output_image_url})
                    
                else:
                    print(f"Error code {error_code}: {data.get('error_msg', 'Unknown error')}")
                    return Response('error code')
            else:
                return Response(response)
        else: 
            return Response("Image is not Uploaded")
        