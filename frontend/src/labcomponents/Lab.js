import { Flex, Box, Image, HStack, Text, Avatar, Spacer } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter'
import logo from '../images/glamazon-logo.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { brown } from '@mui/material/colors';

function Lab() {
  return (
    <div>
      <Flex px={4} py={2}>
        <Box>
          <Image w={300} h={20} src={logo}/>
        </Box><Spacer/>

        <Box display='flex'
         textAlign='center' justifyContent='center'>
          <HStack spacing={16} justifyContent='center'>
            <Box className='hoverable1'>HAIRCOLOR</Box>
            <Box className='hoverable1'>HAIRSTYLE</Box>
            <Box className='hoverable1'>BEARD & MOUSTACHE</Box>
            <Box className='hoverable1'>EYEBROW</Box>
            <Box className='hoverable1'>LIPCOLOR</Box>
          </HStack>
        </Box><Spacer/>
      
        <Box alignItems='center' display='flex'>
          <HStack>
              <FavoriteIcon style={{ color: "#663620", fontSize: "18px" }} />
              <Text m={0}>Wishlist</Text>
              <Avatar ml={2} w={50} bg={'brown'} src='https://bit.ly/broken-link' />
          </HStack> 
        </Box>
      </Flex>
      <Filter/>
    </div>
  )
}

export default Lab
