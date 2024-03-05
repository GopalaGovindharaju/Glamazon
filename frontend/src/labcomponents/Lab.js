import React, { useState } from 'react'
import Filter from './Filter'
import ThreeDtry from '../components/ThreeDtry';
import LabHeader from './LabHeader';
import StyledItems from './StyledItems';
import Selection from '../components/Selection';

function Lab() {
  const [closeSnap, setCloseSnap] = useState(true);
  const [snapedImage, setSnapedImage] = useState(null);
  const [userchoice, setUserChoice] = useState(false)

  

  return (
    <div>
      <LabHeader/>
      <Filter/>
      {userchoice ? <> {closeSnap ? (
        <ThreeDtry setCloseSnap={setCloseSnap} setSnapedImage={setSnapedImage} />
      ) : (
        <StyledItems snapedImage={snapedImage} />
      )} </> : <Selection setUserChoice={setUserChoice}/> 
    }
      

    </div>
  )
}

export default Lab
