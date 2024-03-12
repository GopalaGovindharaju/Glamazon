import { Avatar, Box, Flex, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from '../images/glamazon-logo.png'

function LabHeader() {

  const [activeTab, setActiveTab] = useState(null);

  const handleItemClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <Flex px={4} py={2} position='fixed' left={0} right={0} borderBottom='1px' borderColor='#663620' zIndex='10' bg='white'>
        <Box>
          <Image w={300} h={20} src={logo}/>
        </Box><Spacer/>

        <Box display='flex'
         textAlign='center' justifyContent='center'>
          <HStack spacing={16} justifyContent='center'>
            <Box className={`hoverable1 ${activeTab === 'hairstyle' ? 'active' : ''}`} onClick={() =>handleItemClick('hairstyle')}>HAIRSTYLE</Box>
            <Box className={`hoverable1 ${activeTab === 'beard-moustache' ? 'active' : ''}`} onClick={() =>handleItemClick('beard-moustache')}>BEARD & MOUSTACHE</Box>
            <Box className={`hoverable1 ${activeTab === 'eyebrow' ? 'active' : ''}`} onClick={() =>handleItemClick('eyebrow')}>EYEBROW</Box>
            <Box className={`hoverable1 ${activeTab === 'lipcolor' ? 'active' : ''}`} onClick={() =>handleItemClick('lipcolor')}>LIPCOLOR</Box>
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
    </div>
  )
}

export default LabHeader
