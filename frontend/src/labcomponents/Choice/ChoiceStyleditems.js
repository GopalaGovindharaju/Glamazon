import React, { useEffect, useState } from 'react'
import Choice from './Choice'
import ChoiceImagePart from './ChoiceImagePart'
import ChoiceStyledPart from './ChoiceStyledPart'
import { useSnapImage } from '../../context/SnapImageContext';
import axios from 'axios';

function ChoiceStyleditems() {
    const [loading, setLoading] = useState(false);
    const [shownImage, setShownImage] = useState(false);
    const { setFilteredImage } = useSnapImage();
  const { setActiveTab, snapedImage, selectedChoice, filteredImage, setSelectedChoice } = useSnapImage();
    useEffect(() => {
      setActiveTab('choice')
    },[])

    const handleMakeup = (image_url,style) => {
      setLoading(true);
      
      const base64ToBlob = (base64) => {
        const parts = base64.split(';base64,');
        const contentType = parts[0].split(':')[1];
        const raw = window.atob(parts[1]);
        const blobArray = new Uint8Array(new ArrayBuffer(raw.length));
    
        for (let i = 0; i < raw.length; i++) {
          blobArray[i] = raw.charCodeAt(i);
        }
    
        return new Blob([blobArray], { type: contentType });
      };
  
      let file;
    
      const continueWithData = () => {
        const formData = new FormData();
        formData.append('username', 'gops');
        formData.append('original_image', file, 'original_image.jpeg');
        formData.append('resource_type', style.resource_type);
        formData.append('strength', style.strength);
        console.log(style)
    
        axios.post('http://127.0.0.1:8000/makeup/getmakeup/', formData)
          .then((response) => {
            console.log(response.data);
            setFilteredImage(response.data.filteredImage);
            setShownImage(true);
          })
          .catch((error) => {
            console.error('Error in POST request:', error);
          })
          .finally(() => {
            setLoading(false); // Set loading to false when request completes
          });
      };
  
      
      if (image_url) {
        // If filteredImage is available, fetch the image from URL and convert to base64
        fetch(image_url)
          .then(response => response.blob())
          .then(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              const base64data = reader.result;
              file = base64ToBlob(base64data);
              continueWithData();
            };
          })
          .catch(error => {
            console.error('Error fetching and converting image:', error);
            setLoading(false); // Set loading to false in case of error
          });
      } else {
        // If filteredImage is not available, use snapedImage directly
        console.log("image nor get from backend")
      }
    
      
    };

    const handleChoice = (style) => {
      setLoading(true);
      
      const base64ToBlob = (base64) => {
        const parts = base64.split(';base64,');
        const contentType = parts[0].split(':')[1];
        const raw = window.atob(parts[1]);
        const blobArray = new Uint8Array(new ArrayBuffer(raw.length));
    
        for (let i = 0; i < raw.length; i++) {
          blobArray[i] = raw.charCodeAt(i);
        }
    
        return new Blob([blobArray], { type: contentType });
      };
  
      let file;
    
      const continueWithData = () => {
        const formData = new FormData();
        formData.append('username', 'gops');
        formData.append('original_image', file, 'original_image.jpeg');
        formData.append('style', style.hairstyle);
        formData.append('color', null);
        console.log(style)
    
        axios.post('http://127.0.0.1:8000/hairstyle/getFilteredHairstyle/', formData)
          .then((response) => {
            console.log(response.data);
            handleMakeup(response.data.filteredImage, style);
          })
          .catch((error) => {
            console.error('Error in POST hairstyle request:', error);
          })
      };
  
      
      if (filteredImage) {
        // If filteredImage is available, fetch the image from URL and convert to base64
        fetch(filteredImage)
          .then(response => response.blob())
          .then(blob => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              const base64data = reader.result;
              file = base64ToBlob(base64data);
              continueWithData();
            };
          })
          .catch(error => {
            console.error('Error fetching and converting image:', error);
            setLoading(false); // Set loading to false in case of error
          });
      } else {
        // If filteredImage is not available, use snapedImage directly
        file = base64ToBlob(snapedImage);
        continueWithData();
      }
    
      
    };
  return (
    <div>
      <Choice selectedChoice={selectedChoice}/>
      <ChoiceImagePart loading={loading} setShownImage={setShownImage} shownImage={shownImage}/>
      <ChoiceStyledPart setSelectedChoice={setSelectedChoice} handleChoice={handleChoice}/>

    </div>
  )
}

export default ChoiceStyleditems
