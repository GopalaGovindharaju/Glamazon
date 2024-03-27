import { Box, Image, Spinner, Stack, Switch, Text } from '@chakra-ui/react'
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
    position="fixed"
    left={0}
    bottom={0}
    top="14%"
    right="75%"
    py={4}
    px={4}
    bg='rgb(251, 249, 247)'
    zIndex={9}
  >
  
          <Stack direction="column" justify="center" pt={2}><Text style={text_css}>APPLIED STYLES</Text></Stack>
          <Stack direction="column" mt={8} >
            <Stack direction="row">
              <Text style={text_css} mb={0} >Hairstyle</Text>
              <Text fontFamily="LKFuturaStd-Medium">{selectedChoice.hairstyle}</Text>
            </Stack>
            <Stack direction="row">
              <Text style={text_css} mb={0} >Catogory</Text>
              <Text fontFamily="LKFuturaStd-Medium">{selectedChoice.category}</Text>
            </Stack>
            <Stack direction="row" >
              <Text style={text_css} mb={0} >Face Shape</Text>
              <Text fontFamily="LKFuturaStd-Medium">{selectedChoice.faceShape}</Text>
            </Stack>
          </Stack>
        
        </Box>
       
       

 </>
 
  

  )
}

export default Choice

