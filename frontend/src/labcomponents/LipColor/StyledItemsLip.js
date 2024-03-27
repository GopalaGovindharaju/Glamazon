import React, { useEffect, useState } from 'react'
import FilterLipcolor from '../FilterLipcolor'
import { useSnapImage } from '../../context/SnapImageContext';
import LipImagePart from './LipImagePart';
import axios from 'axios';

function StyledItemsLip() {
  const { setActiveTab, snapedImage, setFilteredImage, filteredImage } = useSnapImage();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setActiveTab('lipcolor')
  },[])
  const handleLipColor = (color) => {
    // Convert base64 image data to a File object
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
    console.log(color)
    formData.append('color', color);

    console.log(formData);

    axios.post('http://127.0.0.1:8000/lipcolor/getFilteredLipcolor/', formData)
      .then((response) => {
        console.log(response.data);
        setFilteredImage(response.data.filteredImage);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false); // Set loading to false when request completes
      });
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
    // Create FormData and append the file
    
  }
  return (
    <>
    <FilterLipcolor handleLipColor={handleLipColor}/>
    <LipImagePart loading={loading}/>
    </>
  )
}

export default StyledItemsLip
