import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack} from '@chakra-ui/react'
import React from 'react'
import { Hairstyle } from './Hairstyle';

function Items({selectedStyle}) {
  
  
  return (
    <Box
      height={`calc(100vh - 182px)`}
      px={4}
      pb={4}
      overflow="auto"
      bg='rgb(251, 249, 247)'
      display="flex"
      justifyContent='center'
      flexWrap="wrap"
    >
      {Hairstyle.map((item) => (
        <Card key={item.id} maxW="270px" mt={4} display="inline-block" mr={4}>
          <CardBody display='flex' flexDirection='column'>
            <Image h='150px'
              src={item.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
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
  );
}

export default Items
