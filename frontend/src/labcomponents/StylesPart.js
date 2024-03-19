import { Box, Card, CardBody, Heading, Image, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Hairstyle } from '../components/Hairstyle'

function StylesPart({handleHairStyle,recommended,setRecommended,selectedGender,catogory,setSelectedHairStyle}) {
  const [recommendedStyles, setRecommendedStyles] = useState([]);
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
    fontFamily: "var(--chakra-fonts-body)",
    fontWeight:'400',
    color: "rgb(51, 51, 51)",
    fontSize: "15px",
  };
  
  return (
    <Box
    display="flex"
    overflow="auto"
    height='40vh'
    width='100%'
    flexDirection='row'
    pl='17%'
    backgroundColor="#FAF2EC"
    paddingTop="8px"
    paddingLeft="15px"
  >
{recommendedStyles.map((item) => (
      <Card key={item.id}  p={0} minW="200px" maxW="200px" mr={4} boxShadow='0 0 5px rgba(60, 60, 60, 0.5)' onClick={() => handleHairStyleChange(item.id)}>
        <CardBody display="flex" pb={0} flexDirection="column">
          <Image
            h="160PX"
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
