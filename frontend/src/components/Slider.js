import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Button, Image } from '@chakra-ui/react';
import { SlideData } from './SliderImages';
import '../CSS/Slider.css'; // Import the CSS file for styling

function Slider() {
  return (
    <Box w='100%' h='515px' position="relative">
      <Carousel
        infiniteLoop
        showThumbs={false}
        //autoPlay={true}
        //interval={2000}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            disabled={!hasPrev}
            aria-label={label}
            className="control-arrow control-prev"
            style={{ zIndex: 2, top:200, bottom:200 }}
          >
          </button>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            disabled={!hasNext}
            aria-label={label}
            className="control-arrow control-next"
            style={{zIndex: 2, top:200, bottom:200 }}
          >
          </button>
        )}
        style={{ maxHeight: '515px' }}
      >
        {SlideData.map((slide, index) => (
          <Box key={index} w='100%' h='514px' position="relative">
            <Button position="absolute" top={400} left={730} bg='transparent' border="1px solid" >EXPLORE</Button>
            <Image boxSize='100%' objectFit='cover' src={slide.image} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default Slider;
