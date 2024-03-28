import { Box, Input, Button, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useSnapImage } from '../context/SnapImageContext';
import axios from 'axios';

function Selection({setUserChoice, setCloseChooseFile}) {
  const { setSnapedImage } = useSnapImage();
  const { setFilteredImage } = useSnapImage();
  const {setGender, setFaceShape, snapedImage, selectedHairStyle, selectedHaircolor, filteredImage, setSelectedHairColor, setSelectedHairStyle } = useSnapImage();
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
  
    if (selectedFile) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const base64Data = e.target.result;
  
        // Create an Image object
        const img = new Image();
        img.src = base64Data;
  
        // Wait for the image to load
        img.onload = () => {
          // Create a canvas and draw the image on it
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
  
          // Convert canvas content to a data URL (JPEG format)
          const jpegDataURL = canvas.toDataURL('image/jpeg');
  
          // Set the converted JPEG data URL in the state
          setSnapedImage(jpegDataURL);
          genderAndShapeClassification(jpegDataURL);
          setCloseChooseFile(false);
        };
      };
  
      reader.readAsDataURL(selectedFile);
    }
  };

  const genderAndShapeClassification = (image) => {
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
      formData.append('original_image', file, 'original_image.jpeg');
  
      axios.post('http://127.0.0.1:8000/eyebrow/getGender/', formData)
        .then((response) => {
          console.log(response.data.result.face_list[0].gender.type);
          setGender(response.data.result.face_list[0].gender.type)
        })
        .catch((error) => {
          console.error('Error in POST request:', error);
        })
    };

    
      file = base64ToBlob(image);
      continueWithData();
  }

  const handlingchoice=()=>{
    setUserChoice(true);
  }
  return (
    <Box py='10%' margin="auto" position='relative'>
      <Flex direction='column' justifyContent='space-between' border='2px dashed #663620' mr='30%' ml='40%' py='0%' h='50vh'>
        <Box h='30%' w='100%' display='flex' alignItems='center' justifyContent='center' p='100px'>
        <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: '#663620', fontSize: '200px', marginTop: '30%' }} />
        </Box>
      <Flex direction="row" justifyContent="space-around" alignItems='end'>
        <Input
          type="file"
          display="none" // Hide the input element
          onChange={handleFileChange}
          id="fileInput"
        />

        <label htmlFor="fileInput">
          <Button mb='10px' as="span" colorScheme="yellow">
            Choose File
          </Button>
        </label>

        <Button mb='10px' colorScheme="yellow" onClick={handlingchoice}>3D TryON</Button>


      </Flex>
      </Flex>
      
    </Box>
  );
}

export default Selection;
