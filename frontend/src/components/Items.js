import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack} from '@chakra-ui/react'
import React from 'react'
import { Check } from './Check';

function Items({selectedStyle}) {
  return (
    <Box
      height={`calc(100vh - 182px)`}
      px={4}
      overflow="auto"
      mb="2px"
      border="2px"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {Check.map((item) => (
        <Card maxW="sm" mt={4} display="inline-block">
          <CardBody>
            <Image
              src={item.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
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
