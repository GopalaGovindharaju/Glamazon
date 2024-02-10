import React, { useState } from 'react'
import Header from './Header'
import Second from './second';
import Slider from './Slider';
import Items from './Items';
import ThreeDtry from './ThreeDtry';
import { Container } from '@chakra-ui/react';

function Home() {
    const [selectedStyle, setSelectedStyle] = useState('');
  return (
    <div>
      <Header/>
      <Second setSelectedStyle={setSelectedStyle}/>
      {selectedStyle ? <Items selectedStyle={selectedStyle}/> : <Slider setSelectedStyle={setSelectedStyle}/>}
      <ThreeDtry/>
    </div>
  )
}

export default Home
