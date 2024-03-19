import { Box, Image, Spinner, Stack, Switch, Text } from '@chakra-ui/react'
import React from 'react'
import { useSnapImage } from '../../context/SnapImageContext';

function LipImagePart({loading}) {
    const { filteredImage, overAllFilteredImage } = useSnapImage();
  const { snapedImage } = useSnapImage();
  return (
    <div>
      <Box
        pt="6rem"
        pl="17%"
        display="flex"
        border="1px"
        height="calc(100vh - 40vh)"
        overflow="auto"
        flexWrap="wrap"
        alignContent="stretch"
      >
        <Box
          className="col-6"
          border="1px solid black"
          borderRadius="9"
          mb={2}
          backgroundColor="rgb()"
        >
            <Image
              pt={2}
              objectFit="contain"
              w="100%"
              height="calc(100vh - 63vh)"
              src={snapedImage}
              alt="Dan Abramov"
            />
        </Box>
        <Box
          className="col-6"
          border="1px solid black"
          borderRadius="9"
          mb={2}
          backgroundColor="rgb()"
        >
          <Text>FilteredImage</Text>
          <Image
              pt={2}
              objectFit="contain"
              w="100%"
              height="calc(100vh - 63vh)"
              src={overAllFilteredImage}
              alt="Dan Abramov"
            />
          
        </Box>
      </Box>
    </div>
  )
}

export default LipImagePart
