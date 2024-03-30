import { Box, Image, Spinner, Stack, Switch, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { useSnapImage } from '../../context/SnapImageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

function EyebrowImagePart({setShownImage,shownImage,loading}) {
    const { filteredImage } = useSnapImage();
    const { snapedImage } = useSnapImage();
    const [snapImageWidth, setSnapImageWidth] = useState(null); // State to store width of snapped image
    const snapImageRef = useRef(null)
    const [isSolid, setIsSolid] = useState(false);

    const handleClick = () => {
      setIsSolid(!isSolid);
    };

    const handleSnapImageLoad = () => {
      if (snapImageRef.current) {
          setSnapImageWidth(snapImageRef.current.naturalWidth);
          console.log(snapImageRef.current.naturalWidth)
      }
  };
    const handleImageSwitch = (e) => {
        setShownImage(e.target.checked);
        console.log(e.target.checked);
      }
    
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
    <div>
      <Box
        pt="6rem"
        display="flex"
        height="calc(100vh)"
        overflow="auto"
        flexWrap="wrap"
        alignContent="stretch"
        backgroundColor="#FAF2EC"
      >
        <Box
          borderRadius="9"
          width="48%"
          backgroundColor="#FAF2EC"
        >
          <Stack direction="row" justify='center'  pt={2}>
            <Text style={text_css}>ORIGINAL IMAGE</Text>
            <Switch
              pt={1}
              colorScheme="yellow"
              isChecked={shownImage}
              onChange={handleImageSwitch}
            ></Switch>
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
            height="calc(100vh - 22vh)"
            width={snapImageWidth}
            src={filteredImage}
            alt="Dan Abramov"
            borderRadius="md"
            boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          />
           <Box 
           position='absolute'
           pl='40%'
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
              <Image
                objectFit="fit"
                height="calc(100vh - 22vh)"
                onLoad={handleSnapImageLoad}
                ref={snapImageRef}
                src={snapedImage}
                alt="Dan Abramov"
                borderRadius='md'
                boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
              />
            </Stack>
          )}
        </Box>
      </Box>
    </div>
  )
}

export default EyebrowImagePart
