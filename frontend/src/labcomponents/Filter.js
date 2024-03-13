import { Box, Checkbox, Radio, RadioGroup, Stack, Text, VStack} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import { HairColor } from '../components/HairColor';

function Filter() {

    const text_css = {
      fontFamily: "LKFuturaStd-Medium",
      fontWeight:'bold',
      letterSpacing: "1.3px",
      color: "rgb(51, 51, 51)",
      fontSize: "14px",
    };

    const [value, setValue] = useState('all')

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
        <Checkbox colorScheme="yellow" defaultChecked fontFamily="LKFuturaStd">
          Recommended
        </Checkbox>
      </Box>
      <Box pb={7}>
        <Box display="flex">
          <Text style={text_css}>GENDER</Text>
        </Box>
        <RadioGroup onChange={setValue} value={value}>
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
      <Box pb={7}>
        <Box display='flex'>
        <Text style={text_css}>CATAGORIES</Text>
        </Box>
        <VStack alignItems='start'>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow">
          Professional Grooming
          </Checkbox>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow">
          Casual/Everyday Grooming
          </Checkbox>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow">
          Funky/Edgy Grooming
          </Checkbox>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow">
          Vintage/Retro Grooming
          </Checkbox>
          <Checkbox fontFamily="LKFuturaStd" colorScheme="yellow">
          Elegant/Timeless Grooming
          </Checkbox>
        </VStack>
      </Box>
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
          ></Box>
        ))}
      </Stack>
      

      </Box>
    </Box>
  );
}

export default Filter

