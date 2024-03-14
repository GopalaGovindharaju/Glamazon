import React, { useState } from 'react';
import ThreeDtry from '../components/ThreeDtry';
import LabHeader from './LabHeader';
import StyledItems from './StyledItems';
import Selection from '../components/Selection';
import { Outlet } from 'react-router-dom';

function Lab() {
  const [selectedGroom, setSelectedGroom] = useState('hairstyle');
  const [closeSnap, setCloseSnap] = useState(true);
  const [snapedImage, setSnapedImage] = useState(null);
  const [userchoice, setUserChoice] = useState(false);
  const [closeChooseFile, setCloseChooseFile] = useState(true);

  console.log(snapedImage);

  return (
    <div>
      <LabHeader setSelectedGroom={setSelectedGroom} />
      <Outlet />
      {userchoice ? (
        <>
          {closeSnap ? (
            <ThreeDtry
              setCloseSnap={setCloseSnap}
              setSnapedImage={setSnapedImage}
            />
          ) : (
            <StyledItems snapedImage={snapedImage}/>
          )}
        </>
      ) : (
        closeChooseFile ? (
          <Selection setSnapedImage={setSnapedImage} setUserChoice={setUserChoice} setCloseChooseFile={setCloseChooseFile}/>
        ) : (
          <StyledItems snapedImage={snapedImage} selectedGroom={selectedGroom} />
        )
      )}
    </div>
  );
}

export default Lab;
