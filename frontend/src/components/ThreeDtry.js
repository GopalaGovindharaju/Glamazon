import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState} from 'react';
import { useSnapImage } from '../context/SnapImageContext';
import axios from 'axios';

const ThreeDtry = ({setCloseSnap} ) => {
  const videoRef = useRef(null);
  const { setSnapedImage } = useSnapImage();
  const { setFilteredImage } = useSnapImage();
  const [mount, setMount] = useState(false);
  const {setGender, setFaceShape, snapedImage, selectedHairStyle, selectedHaircolor, filteredImage, setSelectedHairColor, setSelectedHairStyle } = useSnapImage();
  useEffect(() => {
    const setupCamera = async () => {
      let currentVideoRef = videoRef.current; // Create a variable to store the reference

      try {
        const constraints = {
          video: {
            width: { min: 1280, ideal: 1920, max: 3840 },
            height: { min: 720, ideal: 1080, max: 2160 },
          },
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (currentVideoRef) {
          currentVideoRef.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }

      return () => {
        if (currentVideoRef && currentVideoRef.srcObject) {
          currentVideoRef.srcObject.getTracks().forEach(track => track.stop());
        }
      };
    };

    setupCamera();
  }, []);

  const handleSnapClick = () => {
    // Capture the snapshot from the video
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const snapshotURL = canvas.toDataURL('image/jpeg');

    // Set the snapshot in state
    setSnapedImage(snapshotURL);
    genderAndShapeClassification(snapshotURL);
    setCloseSnap(false);
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
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
          console.log(response.data.face_detail_infos[0].face_detail_attributes_info.gender.type,response.data.face_detail_infos[0].face_detail_attributes_info.shape.type)
          var gendertype = response.data.face_detail_infos[0].face_detail_attributes_info.gender.type 
          var shapetype = response.data.face_detail_infos[0].face_detail_attributes_info.shape.type
          if(gendertype === 0){
            setGender('male')
          }
          else{
            setGender('female')
          }
          switch(shapetype){
            case 0:
              setFaceShape('square');
              break;
            case 1:
              setFaceShape('diamond');
              break;
            case 2:
              setFaceShape('oval');
              break;
            case 3:
              setFaceShape('heart');
              break;
            case 4:
              setFaceShape('round');
              break;
            default:
              setFaceShape('');
              break;
          }
        })
        .catch((error) => {
          console.error('Error in POST request:', error);
        })
    };

    
      file = base64ToBlob(image);
      continueWithData();
  }

  
  
  
  return (
    <>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="none"
      backdropFilter="auto"
      backdropBlur="2px"
      
    >
      <Box
        position="relative"
        w="1000px"
        h="500px"
        borderRadius="100px"
        left="1%"
        top="1%"
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ width: "100%", height: "100%", borderRadius: "100px", transform: "scaleX(-1)" }}
        />
        <Box
          position="absolute"
          top="45%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="50%"
          h="90%"
          bg="transparent"
          borderRadius="50%"
          border="2px dashed white"
        />
        <Box
          position="absolute"
          left="50%"
          border="1px"
          transform="translate(-50%)"
          py={2}
          px={8}
          my={2}
          color="#663620"
          _hover={{ bg: "#663620", color: "white", transition: "0.4s" }}
          variant="ghost"
          borderRadius="10px"
          onClick={handleSnapClick}
        >
          Click a Snap
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default ThreeDtry;
