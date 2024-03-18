import { Box, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import FilterLipcolor from '../FilterLipcolor'
import { useSnapImage } from '../../context/SnapImageContext';
import ImagePart from '../ImagePart';
import LipImagePart from './LipImagePart';

function StyledItemsLip() {
  const { snapedImage } = useSnapImage();
  const [loading, setLoading] = useState(false);
  const [shownImage, setShownImage] = useState(false);
  return (
    <>
    <FilterLipcolor/>
    <LipImagePart loading={loading} setShownImage={setShownImage} shownImage={shownImage}/>
    </>
  )
}

export default StyledItemsLip
