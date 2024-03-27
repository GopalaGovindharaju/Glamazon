import React, { useEffect, useState } from 'react'
import Header from './Header'
import Second from './second';
import Slider from './Slider';
import Items from './Items';
import { useSnapImage } from '../context/SnapImageContext';

function Home() {
    const [selectedStyle, setSelectedStyle] = useState('');
    const {setSnapedImage,setFilteredImage} = useSnapImage();
    useEffect(() => {
      setSnapedImage(null);
      setFilteredImage(null);
    },[])
  return (
    <div>
      <Header/>
      <Second setSelectedStyle={setSelectedStyle}/>
      {selectedStyle ? <Items selectedStyle={selectedStyle}/> : <Slider setSelectedStyle={setSelectedStyle}/>}
    </div>
  )
}

export default Home
