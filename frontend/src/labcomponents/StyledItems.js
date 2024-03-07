import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StylesPart from './StylesPart';
import ImagePart from './ImagePart';


function StyledItems({snapedImage}) {
  const [filteredImage, setFilteredImage] = useState(null);
  useEffect(() => {
    // Convert base64 image data to a File object
    
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

    
    const file = base64ToBlob(snapedImage);
    
    // Create FormData and append the file
    const formData = new FormData();
    formData.append('username', 'gops');
    formData.append('original_image', file, 'original_image.jpeg');

    console.log(formData);

    axios.post('http://127.0.0.1:8000/hairstyle/getFilteredHairstyle/', formData)
      .then((response) => {
        console.log(response.data);
        setFilteredImage(response.data.filteredImage);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [snapedImage]);
  return (
    <>
      <ImagePart snapedImage={snapedImage}  filteredImage={filteredImage}/>
      <StylesPart snapedImage={snapedImage} />
    </>
  );
}

export default StyledItems
