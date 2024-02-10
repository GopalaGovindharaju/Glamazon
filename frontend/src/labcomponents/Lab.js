import React, { useState } from 'react'
import Filter from './Filter'
import ThreeDtry from '../components/ThreeDtry';
import LabHeader from './LabHeader';
import StyledItems from './StyledItems';

function Lab() {
  const [closeSnap, setCloseSnap] = useState(true);
  const [snapedImage, setSnapedImage] = useState(null);
  return (
    <div>
      <LabHeader/>
      <Filter/>
      {closeSnap ? (
        <ThreeDtry setCloseSnap={setCloseSnap} setSnapedImage={setSnapedImage} />
      ) : (
        <StyledItems snapedImage={snapedImage} />
      )}
      
    </div>
  )
}

export default Lab
