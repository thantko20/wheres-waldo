import { Container, Box, Image } from '@chakra-ui/react';
import React from 'react';
import GameImg from '../../assets/game-image.jpg';
import {
  calculateRelativeCoordinateOnClickEvent,
  isInTheHitBox,
} from '../../utils';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Game = () => {
  const handleOnCharacterChoice = async (characterName, e) => {
    const coordinate = calculateRelativeCoordinateOnClickEvent(e);
    const ref = doc(db, 'characters', characterName.toLowerCase());

    const characterDoc = await getDoc(ref);
    const hitBox = {
      horizontalHitBox: characterDoc.data().horizontalHitBox,
      verticalHitBox: characterDoc.data().verticalHitBox,
    };

    if (isInTheHitBox(hitBox, coordinate)) {
      alert(`You found ${characterName}!`);
    } else {
      alert(`That wasn't ${characterName}.`);
    }
  };

  return (
    <Box w="full" mb={10}>
      <Container maxW="1920px">
        <Image
          src={GameImg}
          w="full"
          onClick={(e) => {
            handleOnCharacterChoice('waldo', e);
          }}
        />
      </Container>
    </Box>
  );
};

export default Game;
