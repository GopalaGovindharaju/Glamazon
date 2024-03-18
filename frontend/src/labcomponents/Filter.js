import { Box, Checkbox, Radio, RadioGroup, Stack, Text, VStack} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { HairColor } from '../components/HairColor';

function Filter({setRecommended, recommended, setSelectedGender, selectedGender, setCatogory, catogory,setSelectedHairColor, handleHairColor}) {

    const text_css = {
      fontFamily: "LKFuturaStd-Medium",
      fontWeight:'bold',
      letterSpacing: "1.3px",
      color: "rgb(51, 51, 51)",
      fontSize: "14px",
    };

    const handleRecommendation = (e) =>{
      setRecommended(e.target.checked);
    };

    const handleCatagorySelection = (e) =>{
      setCatogory({...catogory, [e.target.name]:e.target.checked})
    };

    const handleHairColorChange = (color) => {
      setSelectedHairColor(color);
      handleHairColor(color);
    }

  return (
    <Box
      position="fixed"
      left={0}
      bottom={0}
      top="14%"
      right="83%"
      py={4}
      px={4}
      bg='rgb(251, 249, 247)'
      zIndex={9}
    >
      <Box display="flex" pb={7}>
        <Checkbox colorScheme="yellow" fontFamily="LKFuturaStd" isChecked={recommended} onChange={handleRecommendation}>
          Recommended
        </Checkbox>
      </Box>
      <Box pb={7}>
        <Box display="flex">
          <Text style={text_css}>GENDER</Text>
        </Box>
        <RadioGroup onChange={setSelectedGender} value={selectedGender}>
          <Stack direction="row" spacing={5}>
            <Radio colorScheme="yellow" value="all" fontFamily="LKFuturaStd">
              All
            </Radio>
            <Radio colorScheme="yellow" value="male">
              <FontAwesomeIcon icon={faMars} fontSize={18} style={{ color: "#663620" }} />
            </Radio>
            <Radio colorScheme="yellow" value="female">
              <FontAwesomeIcon icon={faVenus} fontSize={18} style={{ color: "#663620" }} />
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      {recommended === false && <Box pb={7}>
        <Box display='flex'>
        <Text style={text_css}>CATAGORIES</Text>
        </Box>
        <VStack alignItems='start'>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow" name='Professional' isChecked={catogory.Professional} onChange={handleCatagorySelection}>
          Professional Grooming
          </Checkbox>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow" name='Casual' isChecked={catogory.Casual} onChange={handleCatagorySelection}>
          Casual/Everyday Grooming
          </Checkbox>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow" name='Funky' isChecked={catogory.Funky} onChange={handleCatagorySelection}>
          Funky/Edgy Grooming
          </Checkbox>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow" name='Vintage' isChecked={catogory.Vintage} onChange={handleCatagorySelection}>
          Vintage/Retro Grooming
          </Checkbox>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow" name='Elegant' isChecked={catogory.Elegant} onChange={handleCatagorySelection}>
          Elegant/Timeless Grooming
          </Checkbox>
        </VStack>
      </Box>}
      
      <Box pb={7}>
        <Box display='flex'>
        <Text style={text_css}>HAIRCOLORS</Text>
      </Box>  
      <Stack display='flex' flexWrap='wrap' direction='row'>
        {HairColor.map((hairstyle) => (
          <Box
            width='20px'
            height='20px' 
            key={hairstyle.id}
            variant='solid'
            backgroundColor={hairstyle.color}
            borderColor='black'
            border='1px'
            onClick={() => handleHairColorChange(hairstyle.color)}
          ></Box>
        ))}
      </Stack>
      

      </Box>
    </Box>
  );
}

export default Filter

