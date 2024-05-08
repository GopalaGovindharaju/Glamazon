import React, { useState } from 'react';
import ThreeDtry from '../components/ThreeDtry';
import LabHeader from './LabHeader';
import Selection from '../components/Selection';
import { Outlet } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { useSnapImage } from '../context/SnapImageContext';

function Lab() {
  const [closeSnap, setCloseSnap] = useState(true);
  const [userchoice, setUserChoice] = useState(false);
  const [closeChooseFile, setCloseChooseFile] = useState(true);
  const { setFilteredImage } = useSnapImage();

  return (
    <div>
      <LabHeader />
      {userchoice ? (
        <>
          {closeSnap ? (
            <ThreeDtry setCloseSnap={setCloseSnap} />
          ) : (
            <>
              <Box
                position="fixed"
                zIndex={100}
                right="11%"
                top={10}
                className="hello"
                color="#663620"
                _hover={{ bg: "#663620", color: "white", transition: "0.4s" }}
                variant="ghost"
                onClick={() => setFilteredImage(null)}
              >
                Clear Filter
              </Box>
              <Outlet />
            </>
          )}
        </>
      ) : closeChooseFile ? (
        <Selection
          setUserChoice={setUserChoice}
          setCloseChooseFile={setCloseChooseFile}
        />
      ) : (
        <>
          <Button
            position="fixed"
            zIndex={100}
            right="11%"
            top={8}
            className="hello"
            color="#663620"
            _hover={{ bg: "#663620", color: "white", transition: "0.4s" }}
            variant="ghost"
            onClick={() => setFilteredImage(null)}
          >
            Clear Filter
          </Button>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default Lab;
