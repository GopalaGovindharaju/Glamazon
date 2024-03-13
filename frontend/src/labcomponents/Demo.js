import React,{useState} from 'react'
import ThreeDtry from '../components/ThreeDtry';
import StyledItems from './StyledItems';

function Demo() {
    const [closeSnap, setCloseSnap] = useState(true);
    const [snapedImage, setSnapedImage] = useState(null);
  return (
    <div>
       {closeSnap ? (
        <ThreeDtry setCloseSnap={setCloseSnap} setSnapedImage={setSnapedImage} />
      ) : (
        <StyledItems snapedImage={snapedImage} />
      )}
    </div>
  )
}

export default Demo
