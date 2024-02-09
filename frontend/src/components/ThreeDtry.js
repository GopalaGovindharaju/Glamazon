import React, { useEffect, useRef } from 'react';

const ThreeDtry = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const constraints = {
          video: {
            width: { min: 1280, ideal: 1920, max: 3840 },
            height: { min: 720, ideal: 1080, max: 2160 },
          },
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    setupCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ position: 'relative', width: '1000px', height: '500px', borderRadius: '0%', overflow: 'hidden' }}>
        <video ref={videoRef} autoPlay playsInline style={{ width: '100%', height: '100%',borderRadius: '100px', }} />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%', // Adjust width of the oval focuser
            height: '90%', // Adjust height of the oval focuser
            backgroundColor: 'transparent', // Adjust background color and opacity
            borderRadius: '50%', // Creates an oval shape
            border: '2px dashed black', // Add border to the oval

          }}
        ></div>
      </div>
    </div>
  );
};

export default ThreeDtry;
