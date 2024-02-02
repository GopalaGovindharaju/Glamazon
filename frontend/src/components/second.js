import React from 'react';
import { Flex, Box, HStack} from '@chakra-ui/react'
function Second() {
    return (
      <div>
        <Flex px={4} mb={2} bg='rgb(251, 249, 247);
}'>
        <HStack w='70%' justifyContent='space-between' pb={2}>
            <Box className='hoverable1' p={4} pb={1} w={130} bg='white.600'>
            HAIR COLOR
            </Box>
            <Box className='hoverable1' p={4} pb={1} w={130} bg='white.600'>
            HAIR STYLE
            </Box>
            <Box className='hoverable1' p={4} pb={1} w={130} bg='white.600'>
            BEARD
            </Box>
            <Box className='hoverable1' p={4} pb={1} w={130} bg='white.600'>
            MOUSTACHE
            </Box>
            <Box className='hoverable1' p={4} pb={1} w={130} bg='white.600'>
            EYEBROW
            </Box>
            <Box className='hoverable1' p={4} pb={1} w={130} bg='white.600'>
            LIP COLOR
            </Box>
            </HStack>
        </Flex>


      </div>
  );
}

export default Second;