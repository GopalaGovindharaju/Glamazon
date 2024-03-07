import { Box, Card, CardBody, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'

function StylesPart({snapedImage}) {
  return (
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
  )
}

export default StylesPart
