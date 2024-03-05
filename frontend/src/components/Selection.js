import React,{useState} from 'react';
import { Box, Input, Button, Flex } from '@chakra-ui/react';
import ThreeDtry from './ThreeDtry';
import Lab from '../labcomponents/Lab';

function Selection({setUserChoice}) {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);
  };

  const handlingchoice=()=>{
    setUserChoice(true);
  }
  return (
    <Box py='30%' margin="auto"position='relative'>
      <Flex direction="row" justifyContent="space-around" py='0%' px='30%' ml='10%' >
        <Input
          type="file"
          display="none" // Hide the input element
          onChange={handleFileChange}
          id="fileInput"
        />

        <label htmlFor="fileInput">
          <Button as="span" colorScheme="yellow">
            Choose File
          </Button>
        </label>

        <Button colorScheme="yellow" onClick={handlingchoice}>3D TryON</Button>


      </Flex>
    </Box>
  );
}

export default Selection;
