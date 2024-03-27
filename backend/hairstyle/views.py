from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.files.base import ContentFile
import requests
import time
from .models import HairStyle
from .serializers import HairStyle_Serializer
from django.conf import settings



@api_view(['POST'])
def getFilteredHairstyle(request):
    if request.method == 'POST':
        data = request.data

        Original_Image = request.FILES.get('original_image',None)
        UserName = data.get('username')
        hair_style = data.get('style')
        color = data.get('color')
        print("color was",color)



        def query_task_results(api_key, task_id, UserName, OriginalImage):
            query_url = "https://www.ailabapi.com/api/common/query-async-task-result"
            headers = {'ailabapi-api-key': api_key}
            params = {'task_id': task_id}

            while True:
                response = requests.get(query_url, headers=headers, params=params)
                
                if response.status_code == 200:
                    data = response.json()
                    task_status = data.get('task_status', -1)

                    if task_status == 2:
                        # Task completed successfully
                        images = data.get('data', {}).get('images', [])
                        print(images)

                        if images:
                            for i, image_url in enumerate(images):
                                return store_image(image_url, f'output_image_{i+1}.png', UserName, OriginalImage)
                            print("Task completed successfully. Images saved.")
                        else:
                            print("No images found in the task results.")
                        
                        break
                    elif task_status == 1:
                        # Task is still processing
                        print("Task is still processing. Waiting for 5 seconds before querying again.")
                        time.sleep(5)
                    elif task_status == 0:
                        # The task is queued
                        print("The task is queued. Waiting for 5 seconds before querying agains.")
                        time.sleep(5)
                    else:
                        # Task failed
                        print(f"Task failed with status: {task_status}")
                        break
                else:
                    # Querying task results failed
                    print(f"Querying task results failed with status code: {response.status_code}")
                    print(response.text)
                    break

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
                hairstyle_info = HairStyle(UserName = UserName, OrginalImage = OriginalImage)
                hairstyle_info.FilteredImage.save(filename, ContentFile(image_data), save=True)

                hairstyle_info.save()
                current_site = request.build_absolute_uri('/')

                return (current_site + hairstyle_info.FilteredImage.url)
            else:
                print(f"Failed to download image from {image_url}. Status code: {response.status_code}")

        

        if Original_Image:
            image_data = Original_Image.read()
            url = "https://www.ailabapi.com/api/portrait/effects/hairstyle-editor-pro"
            api_key = settings.APIKEY
            headers = {'ailabapi-api-key': api_key}

            files = {'image': (Original_Image.name, image_data, Original_Image.content_type)}
            print(Original_Image.name, Original_Image.content_type)

            if color == 'null':
                payload = {
                    'task_type': 'async',
                    'hair_style': hair_style,
                    'auto': 1
                }
            else:
                payload = {
                    'task_type': 'async',
                    'hair_style': hair_style,
                    'color': color,
                    'auto': 1
                }
            print("data:",payload)

            response = requests.request("POST", url, headers=headers, data=payload, files=files)
            print(response)

            if response.status_code == 200:
                data = response.json()
                error_code = data.get('error_code', -1)

                if error_code == 0:
                    task_id = data.get('task_id', '')
                    
                    if task_id:
                        print(f"Task submitted successfully. Task ID: {task_id}")

                        # Query the task results
                        filteredImage = query_task_results(api_key, task_id, UserName, Original_Image)
                        response_data = {
                            'filteredImage' : filteredImage,
                        }
                        return Response(response_data, status=status.HTTP_200_OK)
                    else:
                        print("Error: Task ID not found in the response.")
                else:
                    print(f"Error code {error_code}: {data.get('error_msg', 'Unknown error')}")
            else:
                return Response(response)
        else: 
            return Response("Image is not Uploaded")
    else:
        return Response("Invalide Request")
