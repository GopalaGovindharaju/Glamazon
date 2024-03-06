import React,{useState} from 'react';
import { Box, Input, Button, Flex } from '@chakra-ui/react';
import ThreeDtry from './ThreeDtry';
import Lab from '../labcomponents/Lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

function Selection({setUserChoice, setSnapedImage, setCloseChooseFile}) {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile)
    setSnapedImage(selectedFile);
    setCloseChooseFile(false);
  };

  const handlingchoice=()=>{
    setUserChoice(true);
  }
  return (
    <Box py='10%' margin="auto" position='relative'>
      <Flex direction='column' justifyContent='space-between' border='2px dashed #663620' mr='30%' ml='40%' py='0%' h='50vh'>
        <Box h='30%' w='100%' display='flex' alignItems='center' justifyContent='center' p='100px'>
        <FontAwesomeIcon icon={faCloudArrowUp} style={{ color: '#663620', fontSize: '200px', marginTop: '30%' }} />
        </Box>
      <Flex direction="row" justifyContent="space-around" alignItems='end'>
        <Input
          type="file"
          display="none" // Hide the input element
          onChange={handleFileChange}
          id="fileInput"
        />

        <label htmlFor="fileInput">
          <Button mb='10px' as="span" colorScheme="yellow">
            Choose File
          </Button>
        </label>

        <Button mb='10px' colorScheme="yellow" onClick={handlingchoice}>3D TryON</Button>


      </Flex>
      </Flex>
      
    </Box>
  );
}

export default Selection;
