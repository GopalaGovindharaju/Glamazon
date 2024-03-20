import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSnapImage } from '../../context/SnapImageContext';

function LipImagePart({loading}) {
  const { filteredImage, overAllFilteredImage } = useSnapImage();
  const { snapedImage } = useSnapImage();

  const text_css = {
    fontFamily: "cambria",
    fontWeight:'550',
    color: "black",
    fontSize: "18px",
  };
  return (
    <div>
      <Box
        pt="6.4rem"
        pl="17%"
        display="flex"
        border="1px"
        height="calc(100vh)"
        overflow="auto"
        flexWrap="wrap"
        alignContent="stretch"
        backgroundColor="#FAF2EC"
      >
        <Box
          className="col-6"
          borderRadius="9"
          mb={2}
          backgroundColor="rgb()"
          pl={2}
        >
          <Text style={text_css} >USER IMAGE</Text>
            <Image
              objectFit="fit"
              w="100%"
              height="calc(100vh - 23vh)"
              src={snapedImage}
              alt="Dan Abramov"
              borderRadius='md'
              boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
            />
        </Box>
        <Box
          className="col-6"
          borderRadius="9"
          mb={2}
          backgroundColor="rgb()"
          px={2}

        >
          <Text style={text_css}>FILTERED IMAGE</Text>
          <Image
              objectFit="fit"
              w="100%"
              height="calc(100vh - 23vh)"
              src={overAllFilteredImage}
              alt="Dan Abramov"
              borderRadius='md'
              boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
              backgroundColor='white'
            />
          
        </Box>
      </Box>
    </div>
  )
}

export default LipImagePart
