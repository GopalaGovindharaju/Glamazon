import { Box, Card, CardBody, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Hairstyle } from '../components/Hairstyle'
import { useSnapImage } from '../context/SnapImageContext';

function StylesPart({handleHairStyle,recommended,setRecommended,selectedGender,catogory,setSelectedHairStyle}) {
  const { selectedHairStyle } = useSnapImage();
  const [recommendedStyles, setRecommendedStyles] = useState([selectedHairStyle]);
  const menHairstyles = Hairstyle.filter(style => style.gender === 'male');
  const womenHairstyles = Hairstyle.filter(style => style.gender === 'female');
  const getRandomHairstyles = (hairstyles, count) => {
    const shuffledHairstyles = hairstyles.sort(() => 0.5 - Math.random());
    return shuffledHairstyles.slice(0, count);
  };

  useEffect(() => {
    if (recommended) {
      const recommendedMenStyles = getRandomHairstyles(menHairstyles, 2);
      const recommendedWomenStyles = getRandomHairstyles(womenHairstyles, 2);
      if (selectedGender === 'male') {
        setRecommendedStyles(recommendedMenStyles);
      } else if (selectedGender === 'female') {
        setRecommendedStyles(recommendedWomenStyles);
      } else if(selectedGender === 'all'){
        setRecommendedStyles([...recommendedMenStyles, ...recommendedWomenStyles]);
      }
      else{
        setRecommendedStyles(Hairstyle);
      }
    } else {
      if (selectedGender === 'male') {
        setRecommendedStyles(menHairstyles);
      } else if (selectedGender === 'female') {
        setRecommendedStyles(womenHairstyles);
      } else {
        setRecommendedStyles(Hairstyle);
      }
    }
  }, [recommended, selectedGender]);

  useEffect(() => {
    if(recommended === false){
      const isAnyCategorySelected = Object.values(catogory).some(value => value);
      if(isAnyCategorySelected){
        setRecommended(false);
      }
      else{
        setRecommended(true);
      }
      const selectedCategories = Object.keys(catogory).filter(category => catogory[category]);
      const catogoryStyle = Hairstyle.filter(style => selectedCategories.includes(style.category));
      console.log(catogoryStyle)
      setRecommendedStyles(catogoryStyle);
    }
  },[catogory])

  const handleHairStyleChange = (id) =>{
    setSelectedHairStyle(id);
    handleHairStyle(id);
  }
  
  const text_css = {
    fontFamily: "Cambria",
    fontWeight:'550',
    color: "rgb(51, 51, 51)",
    fontSize: "17px",
  };
  
  return (
    <Box
    position='fixed'
      right={6}
      bottom={0}
      top="35%"
      left="65%"
      py={4}
      pl={4}
      bg='rgb(251, 249, 247)'
      zIndex={9}
      overflow="auto"
      height="calc(100vh - 35vh)"
      border='2px solid black'
      borderRadius={8}
      display='flex'
      flexWrap='wrap'
      justifyContent='space-evenly'
      alignContent='flex-start'
  >
    {recommendedStyles.map((item) => (
      <Card key={item.id} p={0} m={2} maxW="200px" backgroundColor='#FEF5E7 ' boxShadow='0 0 5px rgba(60, 60, 60, 0.5)' onClick={() => handleHairStyleChange(item.id)}>
        <CardBody pb={0} flexDirection="column">
          <Image
            h="160px"
            src={item.image}
            borderRadius="lg"
            loading="lazy"
          />
          <Stack pt="2" spacing="3">
            <Heading mb={0} style={text_css}>{item.name}</Heading>
          </Stack>
        </CardBody>
      </Card>
    ))}
  </Box>
  )
}

export default StylesPart
