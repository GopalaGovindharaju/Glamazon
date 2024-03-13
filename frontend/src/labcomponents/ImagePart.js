import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function ImagePart({snapedImage,filteredImage}) {
  return (
    <div>
      <Box
      pt="8.2%"
      pl="17%"
      display="flex"
      border="1px"
      height="calc(100vh - 37vh)"
      overflow="auto"
      flexWrap="wrap"
      alignContent='stretch'
    >
      <Box  border='1px solid black' className='col-6' >
      <Image pt={2} objectFit='contain' w='100%' height="calc(100vh - 55vh)" src={snapedImage} alt='Dan Abramov' />
      </Box>
      <Box  className='col-6' border='1px solid black'>
        {filteredImage ? <Image pt={2} objectFit='contain' w='100%' height="calc(100vh - 55vh)" src={filteredImage} alt='Dan Abramov' /> : <>New Look Appears Here</>}
      
      </Box>
      </Box>
    </div>
  )
}

export default ImagePart
