import { Box, Card, CardBody, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import { Eyebrow } from '../../components/Eyebrow';

function EyebrowStylesPart({setSelectedEyebrow, handleEyebrow}) {

    const text_css = {
        fontFamily: "Cambria",
        fontWeight:'550',
        color: "rgb(51, 51, 51)",
        fontSize: "17px",
      };

    const handleEyebrowChange = (style) => {
        setSelectedEyebrow(style);
        handleEyebrow(style);
    }
  return (
    <Box
    position='fixed'
      right={6}
      bottom={0}
      top="20%"
      left="65%"
      py={4}
      pl={4}
      bg='rgb(251, 249, 247)'
      zIndex={9}
      overflow="auto"
      height="calc(100vh - 20.7vh)"
      border='2px solid black'
      borderRadius={8}
      display='flex'
      flexWrap='wrap'
      justifyContent='space-evenly'
      alignContent='flex-start'
  >
    {Eyebrow.map((item) => (
      <Card key={item.id} p={0} m={2} maxW="200px" backgroundColor='#FEF5E7 ' boxShadow='0 0 5px rgba(60, 60, 60, 0.5)' onClick={() => handleEyebrowChange(item.name)}>
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

export default EyebrowStylesPart
