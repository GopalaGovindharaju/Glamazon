import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'

function StyledItems({snapedImage}) {
  return (
<Box pt='7%' pl='21%' display='flex' border='1px'
height='100vh'
overflow="auto"
justifyContent='space-evenly'
flexWrap="wrap">
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
</Box>
  )
}

export default StyledItems
