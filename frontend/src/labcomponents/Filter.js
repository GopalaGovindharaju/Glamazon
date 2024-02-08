import { Box, Checkbox, Radio, RadioGroup, Stack, Text, VStack, calc} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

function Filter() {

    const text_css = {
      fontFamily: "LKFuturaStd-Medium",
      fontWeight:'bold',
      letterSpacing: "1.3px",
      color: "rgb(51, 51, 51)",
      fontSize: "14px",
    };

    const [value, setValue] = React.useState('all')

  return (
    <Box
      position="fixed"
      left={0}
      bottom={0}
      top="15%"
      right="80%"
      py={2}
      px={4}
      bg='rgb(251, 249, 247)'
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
    </Box>
  );
}

export default Filter

