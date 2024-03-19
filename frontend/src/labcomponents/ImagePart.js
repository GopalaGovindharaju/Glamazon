import { Box, Button, CardBody, Center, Heading, Image, Spinner, Stack, Switch, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSnapImage } from '../context/SnapImageContext';
import { Hairstyle } from '../components/Hairstyle';

function ImagePart({selectedHaircolor,selectedHairStyle,setShownImage,shownImage,loading}) {
  const { filteredImage } = useSnapImage();
  const { snapedImage } = useSnapImage();
  const hairstyle = (Hairstyle.find(style => style.id === selectedHairStyle) || '');

  const handleImageSwitch = (e) => {
    setShownImage(e.target.checked);
    console.log(e.target.checked);
  }

  const text_css = {
    fontFamily: "var(--chakra-fonts-body)",
    fontWeight:'400',
    color: "rgb(51, 51, 51)",
    fontSize: "18px",
  };

  return (
    <div>
      <Box
        pt="6rem"
        pl="17%"
        display="flex"
        height="calc(100vh - 40vh)"
        overflow="auto"
        flexWrap="wrap"
        alignContent="stretch"
        backgroundColor="#FAF2EC"
      >
        <Box
          className="col-6"
          boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          borderRadius="9"
          width="42%"
          margin="8px"
          marginLeft="3%"
          backgroundColor="white"
        >
          <Stack direction="row" justify="center" pt={2} pl={2}>
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
            <Stack direction="row" justify="center"><Image
            pt={2}
            objectFit="fit"
            w="40%"
            height="calc(100vh - 63vh)"
            src={filteredImage}
            alt="Dan Abramov"
            borderRadius="md"
            boxSize='200px'
            boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          /></Stack>
            
          ) : (
            <Stack direction="row" justify="center">
              <Image
                objectFit="fit"
                w="40%"
                height="calc(100vh - 65vh)"
                src={snapedImage}
                alt="Dan Abramov"
                borderRadius='md'
                boxSize='200px'
                boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
              />
            </Stack>
          )}
        </Box>
        <Box
          className="col-6"
          boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          borderRadius="9"
          margin="8px"
          backgroundColor="white"
        >
          <Stack direction="row" justify="center" pt={2}><Text style={text_css}>APPLIED STYLES</Text></Stack>
          <Stack direction="row">
            <Stack direction="column" width="35%" mx={3}>
              <Text style={text_css} mb={0}>Hairstyle</Text>
              {hairstyle.image && (
                <Image
                  objectFit="fit"
                  w="100%"
                  height="calc(100vh - 68vh)"
                  src={hairstyle.image}
                  alt="Dan Abramov"
                  borderRadius="md"
                  boxSize='180px'
                  boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
                />
              )}
            </Stack>
            <Stack direction="column" width="36%">
              <Text style={text_css} mb={0}>HairColor</Text>
              <Box
                height="calc(100vh - 68vh)"
                variant="solid"
                mr={2}
                backgroundColor={selectedHaircolor}
                borderColor="black"
                border="0.6px"
                borderRadius="md"
                boxSize='178px'
                boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
              />
            </Stack>
            <Stack direction="column">
              <Text style={text_css} mb={0}>Catogory</Text>
              <Text fontFamily="LKFuturaStd-Medium" fontWeight="bold">{hairstyle.category ? hairstyle.category : ""}</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default ImagePart
