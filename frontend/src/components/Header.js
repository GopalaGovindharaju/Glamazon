import { Box, Flex, Image, Spacer, Input, Text, HStack, Button} from '@chakra-ui/react';
import React from 'react';
import logo from '../images/glamazon-logo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
  return (
    <div>
      <Flex px={4} border="1px">
        <Box pt="2">
          <Image w={180} h={10} src={logo} />
        </Box>
        <Spacer />
        <Box
          px={3}
          pt={2}
          w={{ base: "150px", md: "300px", lg: "420px", xl: "700px" }}
          minW="150px"
        >
          <Input
            size="sm"
            py={4}
            px={7}
            border="1px solid rgba(0, 0, 66, 0.5)"
            borderRadius={5}
            placeholder="What are you looking for?"
          />
        </Box>
        <Spacer />
        <Box w={{ base: "350px", md: "370px", lg: "370px", xl: "370px" }}>
          <HStack justifyContent='center' pt={1} spacing={6}>
            <Text>Sign in & Sign Up</Text>
            <HStack>
              <FavoriteIcon style={{ color: "#663620", fontSize: "18px" }} />
              <Text>Wishlist</Text>
            </HStack>
            <Button color='#663620' _hover={{ bg: '#663620', color:'white', transition:'0.4s' }} variant='ghost'>3D TRY ON</Button>
          </HStack>
        </Box>
      </Flex>
    </div>
  );
}

export default Header
