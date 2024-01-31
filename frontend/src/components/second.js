import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer ,Box, HStack} from '@chakra-ui/react'
function Second() {
    return (
      <div>
        <Flex px={4} bg='white.100'>
        <HStack spacing='24px'>
            <Box className='hoverable' p='4' w={130 } bg='white.600'>
            EYEGLASSES
            </Box>
            <Box className='hoverable' p='4' w={130} bg='white.600'>
            BEARD
            </Box>
            <Box className='hoverable' p='4' w={130} bg='white.600'>
            MOUSTACHE
            </Box>
            <Box className='hoverable' p='4' w={130} bg='white.600'>
            HAIR COLOR
            </Box>
            <Box className='hoverable' p='4' w={130} bg='white.600'>
            HAIR STYLE
            </Box>
            </HStack>
            <Spacer/>
            <Button m={2} colorScheme='teal' variant='solid'>
             3D TRY ON
            </Button>
            
        </Flex>


      </div>
  );
}

export default Second;