import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

function FilterLipcolor() {
  const [selectedColor, setSelectedColor] = useState({ r: 255, g: 0, b: 0, a: 1 });
  const [displayedColor, setDisplayedColor] = useState(`rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${selectedColor.a})`);

  const handleColorChange = (event) => {
    const hexColor = event.target.value;
    const rgbaColor = hexToRgba(hexColor);
    setSelectedColor(rgbaColor);
    setDisplayedColor(`rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${rgbaColor.a})`); 
  };

  const text_css = {
    fontFamily: "LKFuturaStd-Medium",
    fontWeight:'bold',
    letterSpacing: "1.3px",
    color: "rgb(51, 51, 51)",
    fontSize: "14px",
  };

  const handleColorClick = (color) => {
    setDisplayedColor(color);
  };

  const hexToRgba = (hex) => {
    hex = hex.replace(/^#/, '');

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    const a = 1;

    return { r, g, b, a };
  };

  const lightVariations = Array.from({ length: 10 }).map((_, index) => {
    // Adjust the factor to control the lightness
    const factor = 1 - index / 20; // Change this factor to control lightness
    const variationR = Math.round(selectedColor.r * factor);
    const variationG = Math.round(selectedColor.g * factor);
    const variationB = Math.round(selectedColor.b * factor);
  
    // Decrease alpha as the color gets lighter
    const alpha = 1 - index / 20; // Change this factor to control alpha
  
    return `rgba(${variationR}, ${variationG}, ${variationB}, ${alpha})`;
  });
  
  const darkVariations = Array.from({ length: 10 }).map((_, index) => {
    // Adjust the factor to control the darkness
    const factor = 1 + index / 20; // Change this factor to control darkness
    const variationR = Math.round(selectedColor.r / factor);
    const variationG = Math.round(selectedColor.g / factor);
    const variationB = Math.round(selectedColor.b / factor);
  
    // Increase alpha as the color gets darker
    const alpha = 1 + index / 20; // Change this factor to control alpha
  
    return `rgba(${variationR}, ${variationG}, ${variationB}, ${alpha})`;
  });
  
  
  const colorVariations = [...lightVariations.reverse(), ...darkVariations];
  

  return (
    <Box
      position="fixed"
      left={0}
      bottom={0}
      top="14%"
      right="83%"
      py={4}
      px={4}
      bg="rgb(251, 249, 247)"
      zIndex={9}
    >
      <Flex flexDirection="column" alignItems="center">
      <Text style={text_css} alignSelf='start'>PICK LIP COLOR</Text>
        <input
          type="color"
          id="colorPicker"
          name="colorPicker"
          value={`#${selectedColor.r.toString(16).padStart(2, '0')}${selectedColor.g.toString(16).padStart(2, '0')}${selectedColor.b.toString(16).padStart(2, '0')}`}
          onChange={handleColorChange}
          style={{ width: '200px' }} 
        />

<Text style={text_css} alignSelf='start' pt={7} mb={0}>COLOR VARIATIONS</Text>

        <Flex flexWrap='wrap' direction='row' justifyContent='space-evenly'>
          {colorVariations.map((color, index) => (
            <Box
              key={index}
              paddingTop='10%'
              marginTop='10%'
              w="35px" // Adjust the width as needed
              h="30px" // Adjust the height as needed
              bg={color}
              mx={2}
              border="1px solid #ccc"
              borderRadius="4px"
              onClick={() => handleColorClick(color)}
            />
          ))}
        </Flex>

        <Text style={text_css} mt={7} alignSelf='start'>COLOR DIFFERENCE</Text>
          <Stack direction='row' spacing={0}>
          <Box
            display="inline-block"
            w="100px" // Adjust the width as needed
            h="100px" // Adjust the height as needed
            bg={`rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${selectedColor.a})`}
          />
          <Box
            display="inline-block"
            w="100px" // Adjust the width as needed
            h="100px" // Adjust the height as needed
            bg={displayedColor}
          />
          </Stack>
      </Flex>
    </Box>
  );
}

export default FilterLipcolor;

