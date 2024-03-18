import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

function FilterLipcolor() {
  const [selectedColor, setSelectedColor] = useState({ r: 255, g: 0, b: 0, a: 1 });
  const [displayedColor, setDisplayedColor] = useState(`rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, ${selectedColor.a})`);

  const handleColorChange = (event) => {
    // Update the selected color when the input value changes
    const hexColor = event.target.value;
    const rgbaColor = hexToRgba(hexColor);
    setSelectedColor(rgbaColor);
    setDisplayedColor(`rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${rgbaColor.a})`); // Set displayedColor to RGBA format
  };

  const handleColorClick = (color) => {
    // Set the displayed color when a user clicks on a color box
    setDisplayedColor(color);
  };

  // Convert hex color to RGBA
  const hexToRgba = (hex) => {
    // Remove the hash sign if present
    hex = hex.replace(/^#/, '');

    // Parse the hex values into separate RGB values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Calculate alpha (opacity) based on the user's choice (e.g., hardcoded to 1 for this example)
    const a = 1;

    return { r, g, b, a };
  };

  // Calculate color variations starting from light to original
  const colorVariations = Array.from({ length: 20 }).map((_, index) => {
    const factor = 1 - index / 20; // 20 is the maximum index
    const variationR = Math.round(selectedColor.r * factor);
    const variationG = Math.round(selectedColor.g * factor);
    const variationB = Math.round(selectedColor.b * factor);

    return `rgba(${variationR}, ${variationG}, ${variationB}, ${selectedColor.a})`;
  });

  return (
    <Box
      position="fixed"
      left={0}
      bottom={0}
      top="14%"
      right="80%"
      py={4}
      px={4}
      bg="rgb(251, 249, 247)"
      zIndex={9}
    >
      <Flex flexDirection="column" alignItems="center">
        <label htmlFor="colorPicker">Pick Your LipStick Color:</label>
        <input
          type="color"
          id="colorPicker"
          name="colorPicker"
          marginTop='50%'
          value={`#${selectedColor.r.toString(16).padStart(2, '0')}${selectedColor.g.toString(16).padStart(2, '0')}${selectedColor.b.toString(16).padStart(2, '0')}`}
          onChange={handleColorChange}
        />

        <Text mt={6} mb={2} fontWeight="bold">
          Color Variations:
        </Text>

        <Flex flexWrap='wrap' direction='row' paddingTop='10px'>
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

        <Text mt={4}>
          <b>Selected Color:</b>
          <Box
            display="inline-block"
            ml={2}
            w="20px" // Adjust the width as needed
            h="20px" // Adjust the height as needed
            bg={displayedColor}
            border="1px solid #ccc"
            borderRadius="4px"
          />
          <span style={{ color: displayedColor, marginLeft: '8px', color: "black" }}>{displayedColor}</span>
        </Text>

       
        
      </Flex>
    </Box>
  );
}

export default FilterLipcolor;

