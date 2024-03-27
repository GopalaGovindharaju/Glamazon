import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack} from '@chakra-ui/react'
import React from 'react'
import { Hairstyle } from './Hairstyle';
import { Beard } from './Beard';
import { Eyebrow } from './Eyebrow';
import { LipColor } from './Lipcolor';
import { useNavigate } from 'react-router-dom';
import { useSnapImage } from '../context/SnapImageContext';
import { ChoiceList } from './ChoiceList';

function Items({selectedStyle}) {
  const { setFilteredImage } = useSnapImage();
  const {selectedLipColor, setSelectedLipColor,setSelectedChoice,selectedEyebrow, setSelectedEyebrow, snapedImage, selectedHairStyle, selectedHaircolor, filteredImage, setSelectedHairColor, setSelectedHairStyle } = useSnapImage();
  const navigate = useNavigate()
  const handleHairStyleChoose = (style) => {
    console.log(style)
    setSelectedHairStyle(style)
    navigate('/lab/Hairstyle')
  }
  const handleEyebrowChoose = (style) => {
    setSelectedEyebrow(style)
    navigate('/lab/Eyebrow')
  }
  const handleLipColorChoose = (style) => {
    setSelectedLipColor(style)
    navigate('/lab/Lipcolor')
  }
  const handleChoiceChoose = (style) => {
    setSelectedChoice(style)
    navigate('/lab/Choice')
  }
  
  return (
    <Box
      height={`calc(100vh - 182px)`}
      px={4}
      pb={4}
      overflow="auto"
      bg="rgb(251, 249, 247)"
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
    >
      {selectedStyle === "HAIR STYLE" &&
        Hairstyle.map((item) => (
          <Card key={item.id} maxW="270px" mt={4} display="inline-block" mr={4}>
            <CardBody display="flex" flexDirection="column">
              <Image
                h="150px"
                src={item.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                loading="lazy"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue" onClick={() => handleHairStyleChoose(item.id)}>
                  Try now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to wishlist
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      {selectedStyle === "BEARD" &&
        Beard.map((item) => (
          <Card key={item.id} maxW="270px" mt={4} display="inline-block" mr={4}>
            <CardBody display="flex" flexDirection="column">
              <Image
                h="150px"
                src={item.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                loading="lazy"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Try now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to wishlist
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
        {selectedStyle === "EYEBROW" &&
        Eyebrow.map((item) => (
          <Card key={item.id} maxW="270px" mt={4} display="inline-block" mr={4} onClick={() => handleEyebrowChoose(item.name)}>
            <CardBody display="flex" flexDirection="column">
              <Image
                h="150px"
                src={item.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                loading="lazy"
                objectFit='contain'
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Try now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to wishlist
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
        {selectedStyle === "LIP COLOR" &&
        LipColor.map((item) => (
          <Card key={item.id} maxW="270px" mt={4} display="inline-block" mr={4} onClick={() => handleLipColorChoose(item.name)}>
            <CardBody display="flex" flexDirection="column">
              <Image
                h="150px"
                src={item.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                loading="lazy"
                objectFit='contain'
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Try now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to wishlist
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
        {selectedStyle === "PORTRAIT" &&
        ChoiceList.map((item) => (
          <Card key={item.id} maxW="270px" mt={4} display="inline-block" mr={4} onClick={() => handleChoiceChoose(item)}>
            <CardBody display="flex" flexDirection="column">
              <Image
                h="150px"
                src={item.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                loading="lazy"
                objectFit='contain'
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.category}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Try now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to wishlist
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
    </Box>
  );
}

export default Items
