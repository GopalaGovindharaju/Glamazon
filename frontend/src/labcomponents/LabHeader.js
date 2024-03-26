import { Avatar, Box, Flex, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from '../images/glamazon-logo.png';
import { Link, useNavigate } from 'react-router-dom';

function LabHeader() {

  const [activeTab, setActiveTab] = useState('hairstyle');

  const handleItemClick = (id) => {
    setActiveTab(id);
  };
  const navigate = useNavigate();
  const handleHomeNavigation = () => {
    navigate('/')
  }

  return (
    <div>
      <Flex px={4} py={2} position='fixed' height='15vh' left={0} right={0} borderBottom='1px' borderColor='#663620' zIndex='10' bg='white'>
        <Box>
          <Image w={300} h={20} src={logo} onClick={handleHomeNavigation}/>
        </Box><Spacer/>

        <Box display='flex'
         textAlign='center' justifyContent='center'>
          <HStack spacing={16} justifyContent='center'>
            <Box className={`hoverable1 ${activeTab === 'hairstyle' ? 'active' : ''}`} onClick={() =>handleItemClick('hairstyle')}><Link to='Hairstyle'>HAIRSTYLE</Link></Box>
            <Box className={`hoverable1 ${activeTab === 'beard-moustache' ? 'active' : ''}`} onClick={() =>handleItemClick('beard-moustache')}><Link to='BeardMoustache'>BEARD&MOUSTACHE</Link></Box>
            <Box className={`hoverable1 ${activeTab === 'eyebrow' ? 'active' : ''}`} onClick={() =>handleItemClick('eyebrow')}><Link to='Eyebrow'>EYEBROW</Link></Box>
            <Box className={`hoverable1 ${activeTab === 'lipcolor' ? 'active' : ''}`} onClick={() =>handleItemClick('lipcolor')}><Link to='Lipcolor'>LIPCOLOR</Link></Box>
            <Box className={`hoverable1 ${activeTab === 'choice' ? 'active' : ''}`} onClick={() =>handleItemClick('choice')}><Link to='CHOICE'>CHOICE</Link></Box>

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
