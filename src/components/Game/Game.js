import {
  Container,
  Box,
  Image,
  Heading,
  Flex,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GameImg from '../../assets/game-image.jpg';
import {
  calculatePos,
  calculateRelativeCoordinateOnClickEvent,
  isInTheHitBox,
} from '../../utils';
import { getCharacters, getHitBox } from '../../firebase/dbHelper';

const PopUp = ({ names, isActive, position: { top, left } }) => {
  if (isActive) {
    return (
      <Flex
        direction="column"
        gap={8}
        pos="absolute"
        top={top + 'px'}
        left={left + 'px'}
        bg="white"
        color="gray.900"
      >
        <Heading as="h3">Who&apos; this?</Heading>
        <VStack>
          {names.map((name, idx) => (
            <Button key={idx} variant="link" color="inherit">
              <Text>{name[0].toUpperCase() + name.slice(1)}</Text>
            </Button>
          ))}
        </VStack>
      </Flex>
    );
  }
};

const Game = () => {
  const [characters, setCharacters] = useState([]);

  const [hasClickedOnImg, setHasClickedOnImg] = useState(false);
  const [popUpPos, setPopUpPos] = useState({ top: 0, left: 0 });
  const [isPopupActive, setIsPopUpActive] = useState(false);

  useEffect(() => {
    const retrieveCharacters = async () => {
      const temp = await getCharacters();

      setCharacters(temp);
    };

    retrieveCharacters();
  }, []);

  const handleOnClick = (e) => {
    setIsPopUpActive(true);
    const pos = calculatePos(e);
    console.log(pos);
    setPopUpPos({ top: pos[1], left: pos[0] });

    // await handleOnCharacterChoice('characterName', e);
  };

  const handleOnCharacterChoice = async (characterName, e) => {
    const coordinate = calculateRelativeCoordinateOnClickEvent(e);
    console.log(e);
    try {
      const hitBox = await getHitBox(characterName);

      if (isInTheHitBox(hitBox, coordinate)) {
        alert(`You found ${characterName}!`);
      } else {
        alert(`That wasn't ${characterName}.`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box w="full" mb={10}>
      <Container maxW="1920px" pos="relative">
        <PopUp
          names={characters}
          position={popUpPos}
          isActive={isPopupActive}
        />
        <Image src={GameImg} w="full" onClick={handleOnClick} />
      </Container>
    </Box>
  );
};

export default Game;
