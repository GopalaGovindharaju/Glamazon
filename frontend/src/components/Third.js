// Picture.jsx
import React, { useState, useEffect } from 'react';
import h8 from '../images/h8.png';
import h6 from '../images/h6.png';
import h3 from '../images/h3.jpg';
import h9 from '../images/h10.jpg';
import '../Third.css';

const images = [h8, h6, h3, h3, h9]; // Add more images as needed
const imageDuration = 700; // Duration in milliseconds for each image

function Picture() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, imageDuration);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-frame">
      <div className="slide-images" style={{ left: `-${currentIndex * 1200}px` }}>
        {images.map((image, index) => (
          <div key={index} className="img-container">
            <img src={image} alt={`Hairstyle ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Picture;
