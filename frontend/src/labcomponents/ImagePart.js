import { Box, Button, Heading, Image, Spinner, Stack, Switch, Text } from '@chakra-ui/react'
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
          <Stack direction="row" pt={2} pl={2}>
            <Text>OriginalImage</Text>
            <Switch
              pt={1}
              colorScheme="yellow"
              isChecked={shownImage}
              onChange={handleImageSwitch}
            ></Switch>
            <Text>FilteredImage</Text>
          </Stack>
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="yellow.600"
              size="xl"
            />
          ) : shownImage ? (
            <Image
              pt={2}
              objectFit="contain"
              w="100%"
              height="calc(100vh - 63vh)"
              src={filteredImage}
              alt="Dan Abramov"
            />
          ) : (
            <Image
              pt={2}
              objectFit="contain"
              w="100%"
              height="calc(100vh - 63vh)"
              src={snapedImage}
              alt="Dan Abramov"
            />
          )}
        </Box>
        <Box
          className="col-6"
          border="1px solid black"
          borderRadius="9"
          mb={2}
          backgroundColor="rgb()"
        >
          <Text>Applied Styles</Text>
          <Stack direction="row">
            <Stack direction="column" mx={3}>
              <Text mb={0}>Hairstyle</Text>
              {hairstyle.image && (
                <Image
                  pt={2}
                  objectFit="fit"
                  w="100%"
                  height="calc(100vh - 68vh)"
                  src={hairstyle.image}
                  alt="Dan Abramov"
                />
              )}
            </Stack>
            <Stack direction="column">
              <Text mb={0}>HairColor</Text>
              <Box
                width="200px"
                height="calc(100vh - 69vh)"
                variant="solid"
                mt={2}
                mr={2}
                backgroundColor={selectedHaircolor}
                borderColor="black"
                border="1px"
              />
            </Stack>
            <Stack direction="column">
              <Text mb={0}>Catogory</Text>
              <Text>{hairstyle.category ? hairstyle.category : ""}</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default ImagePart
