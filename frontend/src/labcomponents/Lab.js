import React, { useState } from 'react';
import ThreeDtry from '../components/ThreeDtry';
import LabHeader from './LabHeader';
import Selection from '../components/Selection';
import { Outlet } from 'react-router-dom';

function Lab() {
  const [selectedGroom, setSelectedGroom] = useState('hairstyle');
  const [closeSnap, setCloseSnap] = useState(true);
  const [userchoice, setUserChoice] = useState(false);
  const [closeChooseFile, setCloseChooseFile] = useState(true);

  return (
    <div>
      <LabHeader />
      {userchoice ? (
        <>
          {closeSnap ? (
            <ThreeDtry
              setCloseSnap={setCloseSnap}
            />
          ) : (
            <Outlet/>
          )}
        </>
      ) : (
        closeChooseFile ? (
          <Selection setUserChoice={setUserChoice} setCloseChooseFile={setCloseChooseFile}/>
        ) : (
          <Outlet/>
        )
      )}
    </div>
  );
}

export default Lab;
