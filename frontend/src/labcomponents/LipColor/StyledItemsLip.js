import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import FilterLipcolor from '../FilterLipcolor'
import { useSnapImage } from '../../context/SnapImageContext';

function StyledItemsLip() {
  const { snapedImage } = useSnapImage();
  return (
    <>
    <FilterLipcolor/>
    <Image
            h="100%"
            src={snapedImage}
            borderRadius="lg"
            loading="lazy"
            w='100%'
          /></>
  )
}

export default StyledItemsLip
