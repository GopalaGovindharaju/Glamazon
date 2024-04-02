import { Box, Image, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSnapImage } from '../../context/SnapImageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

function LipImagePart({loading}) {
  const { filteredImage, overAllFilteredImage } = useSnapImage();
  const { snapedImage } = useSnapImage();
  const [isSolid, setIsSolid] = useState(false);

  const handleClick = () => {
    setIsSolid(!isSolid);
  };
  const text_css = {
    fontFamily: "cambria",
    fontWeight:'550',
    color: "black",
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
        pt="6.4rem"
        pl="17%"
        display="flex"
        border="1px"
        height="calc(100vh)"
        overflow="auto"
        flexWrap="wrap"
        alignContent="stretch"
        backgroundColor="#FAF2EC"
      >
        <Box  
          className="col-6"
          borderRadius="9"
          mb={2}
          backgroundColor="rgb()"
          display='flex'
          flexDirection='column'
          alignItems='center'
          pl={2}
        >
          <Text style={text_css} >USER IMAGE</Text>
          <Image
            objectFit="fit"
            w="80%"
            height="calc(100vh - 23vh)"
            src={snapedImage}
            alt="Dan Abramov"
            borderRadius='md'
            boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
          />
        </Box>
        <Box
          className="col-6"
          borderRadius="9"
          mb={2}
          backgroundColor="rgb()"
          px={2}
          display='flex'
          flexDirection='column'
          alignItems='center'

        >
          <Text style={text_css}>FILTERED IMAGE</Text>
          { loading ? <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="orange.700"
              size="xl"
            /> : <>
            <Image
              objectFit="fit"
              w="80%"
              height="calc(100vh - 23vh)"
              src={filteredImage}
              alt="Dan Abramov"
              borderRadius='md'
              boxShadow='0 0 5px rgba(60, 60, 60, 0.5)'
              backgroundColor='white'
            />
            <Box 
           position='absolute'
          
           pl='27%'
           pt='5.5%'
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
          </Box></>}
          
        </Box>
      </Box>
    </div>
  )
}

export default LipImagePart
