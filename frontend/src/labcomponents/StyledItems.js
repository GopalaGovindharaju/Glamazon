import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect } from 'react'


function StyledItems({snapedImage}) {
  console.log(snapedImage)
  useEffect(() => {
    // Convert base64 image data to a File object
    
    const base64ToBlob = (base64) => {
      const parts = base64.split(';base64,');
      const contentType = parts[0].split(':')[1];
      const raw = window.atob(parts[1]);
      const blobArray = new Uint8Array(new ArrayBuffer(raw.length));

      for (let i = 0; i < raw.length; i++) {
        blobArray[i] = raw.charCodeAt(i);
      }

      return new Blob([blobArray], { type: contentType });
    };

    
    const file = snapedImage instanceof File ? snapedImage : base64ToBlob(snapedImage);
    
    // Create FormData and append the file
    const formData = new FormData();
    formData.append('username', 'gops');
    formData.append('original_image', file, 'original_image.jpeg');

    console.log(formData);

    /* axios.post('http://127.0.0.1:8000/hairstyle/getFilteredHairstyle/', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })*/
  }, [snapedImage]);
  return (
    <>
    <Box
      pt="6.2%"
      pl="17%"
      display="flex"
      border="1px"
      height="calc(100vh - 40vh)"
      overflow="auto"
      flexWrap="wrap"
      alignContent='stretch'
    >
      <Box  border='1px solid black' className='col-6' >
      <Image pt={2} objectFit='contain' w='100%' height="calc(100vh - 55vh)" src={require('../images/girl.jpg')} alt='Dan Abramov' />
      </Box>
      <Box  className='col-6' border='1px solid black'>
      <Image pt={2} objectFit='contain' w='100%' height="calc(100vh - 55vh)" src={require('../images/girl.jpg')} alt='Dan Abramov' />
      </Box>



   
     {/*
     {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} maxW="270px" mt={4} display="inline-block" mr={4}>
          <CardBody display="flex" flexDirection="column">
            <Image
              h="150px"
              src={snapedImage}
              borderRadius="lg"
              loading="lazy"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">sample</Heading>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Try now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to wishlist
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))} 
     */}
    </Box>
    <Box
      display="flex"
      border="1px"
      overflow="auto"
      height='40vh'
      width='100%'
      flexDirection='row'
      pl='17%'
    >
{Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} h='auto' minW="270px" my={2} mr={4}>
          <CardBody display="flex" pb={0} flexDirection="column">
            <Image
              h="100%"
              src={snapedImage}
              borderRadius="lg"
              loading="lazy"
            />
            <Stack mt="2" spacing="3">
              <Heading size="md">sample</Heading>
            </Stack>
          </CardBody>
        </Card>
      ))} 
    </Box>
    </>
  );
}

export default StyledItems
