import { Box, Flex, Image, Spacer, Input } from '@chakra-ui/react';
import React from 'react';
import logo from '../images/glamazon-logo.png';

function Header() {
  return (
    <div>
      <Flex px={4} border='1px'>
        <Box pt="2">
          <Image w={300} h={20} src={logo}/>
        </Box>
        <Spacer/>
        <Box p="4">
        <Input size='lg' placeholder='Basic usage' className='textbox'/>
        </Box>
        <Spacer/>
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
    </div>
  );
}

export default Header
