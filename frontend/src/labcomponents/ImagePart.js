import { Box, Image, Spinner, Stack, Switch, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSnapImage } from '../context/SnapImageContext';
import { Hairstyle } from '../components/Hairstyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

function ImagePart({selectedHaircolor,selectedHairStyle,setShownImage,shownImage,loading}) {
  const { filteredImage } = useSnapImage();
  const { snapedImage } = useSnapImage();
  const hairstyle = (Hairstyle.find(style => style.id === selectedHairStyle) || '');
  const [isSolid, setIsSolid] = useState(false);

  const handleClick = () => {
    setIsSolid(!isSolid);
  };
  const handleImageSwitch = (e) => {
    setShownImage(e.target.checked);
    console.log(e.target.checked);
  }
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
  const text_css = {
    fontFamily: "Cambria",
    fontWeight:'550',
    color: "rgb(51, 51, 51)",
    fontSize: "18px",
  };
  
  console.log(selectedHaircolor)

  return (
    <div>
      <Box
        pt="6rem"
        pl="17%"
        display="flex"
        height="calc(100vh)"
        overflow="auto"
        flexWrap="wrap"
        alignContent="stretch"
        backgroundColor="#FAF2EC"
      >
        <Box
          borderRadius="9"
          width="58%"
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
            objectFit="fit"
            height="calc(100vh - 22vh)"
            src={filteredImage}
            alt="Dan Abramov"
            borderRadius="md"
            boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
            position='relative'
            
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
          </Box>
          </Stack>
            
          ) : (
            <Stack direction="row" justify='center'>
              <Image
                objectFit="fit"
                height="calc(100vh - 22vh)"
                src={snapedImage}
                alt="Dan Abramov"
                borderRadius='md'
                boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
              />
            </Stack>
          )}
        </Box>
        <Box
          boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          borderRadius="9"
          backgroundColor="white"
          border='2px solid black'
          mt='1.4%'
          width='40%'
          height="120px"
        >
          <Stack direction="row" justify="center" pt={2}><Text style={text_css}>APPLIED STYLES</Text></Stack>
          <Stack direction="row">
            <Stack direction="column" w="55%">
              <Text style={text_css} mb={0}>Hairstyle</Text>
              {hairstyle.image && (
                <Text fontFamily="LKFuturaStd-Medium">{hairstyle.name}</Text>
              )}
            </Stack>
            <Stack direction="column" w="33%">
              <Text style={text_css} mb={0}>HairColor</Text>
              <Text fontFamily="LKFuturaStd-Medium">{selectedHaircolor}</Text>
            </Stack>
            <Stack direction="column" w="33%">
              <Text style={text_css} mb={0}>Catogory</Text>
              <Text fontFamily="LKFuturaStd-Medium">{hairstyle.category ? hairstyle.category : ""}</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default ImagePart
