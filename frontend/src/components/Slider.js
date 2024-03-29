import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import '../CSS/Slider.css';
import Hairstyle from './Images/Hairstyles.jpg';
import Haircolor from './Images/Haircolors.jpg';
import Eyebrow from './Images/Eyebrow.jpg';
import Beard from './Images/Beard.jpg';
import Lipcolor from './Images/Lipcolors.jpg';
import Mustache from './Images/Moustache.jpg';

function Slider() {
  const SlideData = [
    {
      image: Hairstyle,
      quote: 'Your hair is your best accessory',
    },
    {
      image: Haircolor,
      quote: 'Color your world with beautiful hair',
    },
    {
      image: Eyebrow,
      quote: 'Enhance your look with perfect eyebrows',
    },
    {
      image: Beard,
      quote: 'Let your beard do the talking',
    },
    {
      image: Mustache,
      quote: 'Style up with a classy mustache',
    },
    {
      image: Lipcolor,
      quote: 'Pout with confidence',
    },
  ];

  return (
    <Box w="100%" h="515px" position="relative">
      <Carousel
        infiniteLoop
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            disabled={!hasPrev}
            aria-label={label}
            className="control-arrow control-prev"
            style={{ zIndex: 2, top: 200, bottom: 200 }}
          ></button>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            disabled={!hasNext}
            aria-label={label}
            className="control-arrow control-next"
            style={{ zIndex: 2, top: 200, bottom: 200 }}
          ></button>
        )}
        style={{ maxHeight: '515px' }}
      >
        {SlideData.map((slide, index) => (
          <Box key={index} w="100%" h="514px" position="relative">
            <Image boxSize="100%" objectFit="fill" src={slide.image} loading="lazy" />
            <Button
              position="absolute"
              top="80%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg='rgba(0,0,0,0.4)'
              border="1px solid"
              color='white'
              backdropFilter='blur(5px)'
            >
              EXPLORE
            </Button>
            <Text
              position="absolute"
              top="calc(80% + 50px)" // Adding 20px to create space between button and text
              left="50%"
              transform="translate(-50%, -50%)"
              backdropFilter='blur(5px)'
              style={{ fontSize: '1.5rem', textAlign: 'center', color: '#ffffff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} // Setting attractive color and text shadow
            >
              {slide.quote}
            </Text>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Slider;
