import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

function FilterLipcolor({handleLipColor}) {
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
    handleLipColor(color);
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
    // Calculate green and blue values based on the index
    const green = Math.min(selectedColor.g + index * 15, 255);
    const blue = Math.min(selectedColor.b + index * 15, 255);
  
    // Construct the rgba color string
    const color = `rgba(${selectedColor.r}, ${green}, ${blue}, 1)`;
  
    return color;
  });
  
  const darkVariations = Array.from({ length: 10 }).map((_, index) => {
    // Decrease each RGB component proportionally
    const scaleFactor = 1 - index * 0.05; // Adjust the factor as needed for desired darkness increment
    const variationR = Math.max(selectedColor.r * scaleFactor, 0);
    const variationG = Math.max(selectedColor.g * scaleFactor, 0);
    const variationB = Math.max(selectedColor.b * scaleFactor, 0);
  
    // Construct the rgba color string
    const color = `rgba(${Math.round(variationR)}, ${Math.round(variationG)}, ${Math.round(variationB)}, 1)`;
  
    return color;
});

  const colorVariations = [...lightVariations.slice(1).reverse(), ...darkVariations];  
  

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
            borderRight='0.5px solid gray'
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

