import { Box, Image, Spinner, Stack, Switch, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSnapImage } from '../../context/SnapImageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';


function ChoiceImagePart({setShownImage,shownImage,loading}) {
    const { filteredImage } = useSnapImage();
    const { snapedImage } = useSnapImage();
    const handleImageSwitch = (e) => {
        setShownImage(e.target.checked);
        console.log(e.target.checked);
      }
      const [isSolid, setIsSolid] = useState(false);

      const handleClick = () => {
        setIsSolid(!isSolid);
      };
    const text_css = {
        fontFamily: "Cambria",
        fontWeight:'550',
        color: "rgb(51, 51, 51)",
        fontSize: "18px",
      };
      const cancelIconStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '50%',
        right: '-10%',
        transform: 'rotate(0deg)',
        cursor: 'pointer'
        
    };
  return (
    <>
       <Box
        pt="6rem"
        pl="2%"
        display="flex"
        height="calc(100vh)"
        overflow="auto"
        flexWrap="wrap"
        alignContent="stretch"
        backgroundColor="#FAF2EC"
        flexDirection='column'
      >
        <Box
          borderRadius="9"
          width="38%"
          backgroundColor="#FAF2EC"
        >
          <Stack direction="row" justify='center'  pt={2}>
            <Text style={text_css}>ORIGINAL IMAGE</Text>
          </Stack>
            <Image
            objectFit="fit"
            height="calc(100vh - 22vh)"
            src={snapedImage}
            alt="Dan Abramov"
            borderRadius="md"
            boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          />
        </Box>
        <Box
          borderRadius="9"
          width="38%"
          mr='22%'
          backgroundColor="#FAF2EC"
        >
          <Stack direction="row" justify='center'  pt={2}>
            <Text style={text_css}>FILTERED IMAGE</Text>
          </Stack>
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="orange.700"
              size="xl"
            />
          ) : shownImage ? (
            <Stack direction="row" justify='center'>
            <Image
            objectFit="fit"
            height="calc(100vh - 22vh)"
            src={filteredImage}
            alt="Dan Abramov"
            borderRadius="md"
            boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          />
           <Box 
           position='absolute'
           pl='30%'
          >
          <div  style={cancelIconStyle}>
          <button onClick={handleClick}>
        {isSolid ? (
          <FontAwesomeIcon icon={solidHeart} style={{ color: 'red' }}/>
        ) : (
          <FontAwesomeIcon icon={regularHeart} />
        )}
      </button>
          </div>
          </Box></Stack>
            
          ) : (
            <Stack direction="row" justify='center'>
              <Text>Click the Styles</Text>
            </Stack>
          )}
        </Box>
        
      </Box>
    </>
  )
}

export default ChoiceImagePart
