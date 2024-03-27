import React from 'react';
import { Flex, Box, HStack} from '@chakra-ui/react'

function Second({setSelectedStyle}) {
  const handleStyle = (e) => {
    setSelectedStyle(e.currentTarget.dataset.name);
  }
    return (
      <div>
        <Flex px={4} mb={2} bg='rgb(251, 249, 247)'>
        <HStack w='70%' justifyContent='space-between' pb={2}>
            <Box className='hoverable1' data-name="PORTRAIT" onClick={handleStyle} p={4} pb={1} w={130} bg='white.600'>
            PORTRAIT
            </Box>
            <Box className='hoverable1' data-name="HAIR STYLE" onClick={handleStyle} p={4} pb={1} w={130} bg='white.600'>
            HAIR STYLE
            </Box>
            <Box className='hoverable1' data-name="BEARD" onClick={handleStyle} p={4} pb={1} w={200} bg='white.600'>
            BEARD & MOUSTACHE
            </Box>
            <Box className='hoverable1' data-name="EYEBROW" onClick={handleStyle} p={4} pb={1} w={130} bg='white.600'>
            EYEBROW
            </Box>
            <Box className='hoverable1' data-name="LIP COLOR" onClick={handleStyle} p={4} pb={1} w={130} bg='white.600'>
            LIP COLOR
            </Box>
           
            </HStack>
        </Flex>
      </div>
  );
}

export default Second;