import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'


function Choice({selectedChoice}) {
  const text_css = {
    fontFamily: "Cambria",
    fontWeight:'550',
    color: "rgb(51, 51, 51)",
    fontSize: "18px",
  };
  return (

<>
   <Box
    border='2px solid black'
    borderRadius={8}
    height="calc(100vh - 72vh)"
    position="fixed"
    left='78%'
    bottom={0}
    top="16%"
    right={6}
    py={0}
    px={4}
    bg='rgb(251, 249, 247)'
    zIndex={9}
  >
  
          <Stack direction="column" justify="center" pt={2} mb={0}><Text style={text_css}>APPLIED STYLES</Text></Stack>
          <Stack direction="column">
            <Stack direction="row">
              <Text style={text_css} mb={0}>Hairstyle</Text>
              <Text fontFamily="LKFuturaStd-Medium">{selectedChoice.hairstyle}</Text>
            </Stack>
            <Stack direction="row">
              <Text style={text_css} mb={0}>Catogory</Text>
              <Text fontFamily="LKFuturaStd-Medium">{selectedChoice.category}</Text>
            </Stack>
            <Stack direction="row" >
              <Text style={text_css} mb={0}>Face Shape</Text>
              <Text fontFamily="LKFuturaStd-Medium">{selectedChoice.faceShape}</Text>
            </Stack>
          </Stack>
        
        </Box>
       
       

 </>
 
  

  )
}

export default Choice

