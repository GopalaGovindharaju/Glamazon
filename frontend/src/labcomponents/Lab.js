import { Flex, Box, Image, HStack, Text, Avatar, Spacer } from '@chakra-ui/react'
import React from 'react'
import logo from '../images/glamazon-logo.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { brown } from '@mui/material/colors';

function Lab() {
  return (
    <div>
      <Flex px={4}>
        <Box pt="2">
          <Image w={300} h={20} src={logo}/>
        </Box><Spacer/>

        <Box w={{lg: "650px", xl: "600px" }} display={{ base: "none", md: "block" }}
          minW='500px'>
          <HStack gap={7} pt={8}>
            <Box className='hoverable1'>HAIRCOLOR</Box>
            <Box className='hoverable1'>HAIRSTYLE</Box>
            <Box className='hoverable1'>BEARD & MOUSTACHE</Box>
            <Box className='hoverable1'>EYEBROW</Box>
            <Box className='hoverable1'>LIPCOLOR</Box>
          </HStack>
        </Box><Spacer/>
      
        <Box>
          <HStack pt={5}>
              <FavoriteIcon style={{ color: "#663620", fontSize: "18px" }} />
              <Text m={0}>Wishlist</Text>
              <Avatar ml={2}  bg={'brown'} src='https://bit.ly/broken-link' />
          </HStack> 
        </Box>
      </Flex>
    </div>
  )
}

export default Lab
