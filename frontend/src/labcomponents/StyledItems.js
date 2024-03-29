import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StylesPart from './StylesPart';
import ImagePart from './ImagePart';
import Filter from './Filter';
import { useSnapImage } from '../context/SnapImageContext';


function StyledItems() {
  const { setFilteredImage } = useSnapImage();
  const { setActiveTab, snapedImage, selectedHairStyle, selectedHaircolor, filteredImage, setSelectedHairColor, setSelectedHairStyle } = useSnapImage();
  const [recommended, setRecommended] = useState(true);
  const [selectedGender, setSelectedGender] = useState("all");
  const [shownImage, setShownImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [catogory, setCatogory] = useState({
    'Professional': false,
    'Funky': false,
    'Casual': false,
    'Elegant': false,
    'Vintage': false,
  });

  useEffect(() => {
    setActiveTab('hairstyle')
  },[])


  const handleHairStyle = (style) => {
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
      formData.append('style', style);
      formData.append('color', selectedHaircolor);
      console.log(selectedHaircolor,style)
  
      axios.post('http://127.0.0.1:8000/hairstyle/getFilteredHairstyle/', formData)
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
  
  const handleHairColor = (color) => {
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
// Create FormData and append the file
const formData = new FormData();
formData.append('username', 'gops');
formData.append('original_image', file, 'original_image.jpeg');
console.log(selectedHairStyle)
formData.append('style', selectedHairStyle);
console.log(color)
formData.append('color',color);

console.log(formData);

axios.post('http://127.0.0.1:8000/hairstyle/getFilteredHairstyle/', formData)
  .then((response) => {
    console.log(response.data);
    setFilteredImage(response.data.filteredImage);
    setShownImage(true)
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
    
  }
  return (
    <>
      <Filter handleHairColor={handleHairColor} recommended={recommended} setSelectedHairColor={setSelectedHairColor} catogory = {catogory} setCatogory = {setCatogory} setRecommended={setRecommended} selectedGender = {selectedGender} setSelectedGender={setSelectedGender}/>
      <ImagePart loading={loading} setShownImage={setShownImage} shownImage={shownImage} selectedHairStyle={selectedHairStyle} selectedHaircolor={selectedHaircolor} catogory={catogory}/>
      <StylesPart setSelectedHairStyle={setSelectedHairStyle} handleHairStyle={handleHairStyle} recommended={recommended} setRecommended={setRecommended} selectedGender={selectedGender} catogory={catogory}/>
    </>
  );
}

export default StyledItems
