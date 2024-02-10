import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef} from 'react';

const ThreeDtry = ({setCloseSnap, setSnapedImage} ) => {
  const videoRef = useRef(null);

  
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
    const snapshotURL = canvas.toDataURL('image/png');

    // Set the snapshot in state
    setSnapedImage(snapshotURL);
    setCloseSnap(false);
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };
  
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
        left="10%"
        top="1%"
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{ width: "100%", height: "100%", borderRadius: "100px" }}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="40%"
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
