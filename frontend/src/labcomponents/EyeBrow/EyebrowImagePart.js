import { Box, Image, Spinner, Stack, Switch, Text } from '@chakra-ui/react'
import React from 'react'
import { useSnapImage } from '../../context/SnapImageContext';

function EyebrowImagePart({setShownImage,shownImage,loading}) {
    const { filteredImage } = useSnapImage();
    const { snapedImage } = useSnapImage();
    const handleImageSwitch = (e) => {
        setShownImage(e.target.checked);
        console.log(e.target.checked);
      }
    
    const text_css = {
        fontFamily: "Cambria",
        fontWeight:'550',
        color: "rgb(51, 51, 51)",
        fontSize: "18px",
      };
  return (
    <div>
      <Box
        pt="6rem"
        pl="17%"
        display="flex"
        height="calc(100vh)"
        overflow="auto"
        flexWrap="wrap"
        alignContent="stretch"
        backgroundColor="#FAF2EC"
      >
        <Box
          borderRadius="9"
          width="58%"
          backgroundColor="#FAF2EC"
        >
          <Stack direction="row" justify='center'  pt={2}>
            <Text style={text_css}>ORIGINAL IMAGE</Text>
            <Switch
              pt={1}
              colorScheme="yellow"
              isChecked={shownImage}
              onChange={handleImageSwitch}
            ></Switch>
            <Text style={text_css}>FILTERED IMAGE</Text>
          </Stack>
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="orange.700"
              size="xl"
            />
          ) : shownImage ? (
            <Stack direction="row" justify='center'>
            <Image
            objectFit="fit"
            height="calc(100vh - 22vh)"
            src={filteredImage}
            alt="Dan Abramov"
            borderRadius="md"
            boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          /></Stack>
            
          ) : (
            <Stack direction="row" justify='center'>
              <Image
                objectFit="fit"
                height="calc(100vh - 22vh)"
                src={snapedImage}
                alt="Dan Abramov"
                borderRadius='md'
                boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
              />
            </Stack>
          )}
        </Box>
      </Box>
    </div>
  )
}

export default EyebrowImagePart
