import {
  Container,
  Image,
  Button,
  Flex,
  useDisclosure,
  Text,
  HStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import GameImg from '../../assets/game-image.jpg';
import {
  calculatePos,
  calculateRelativeCoordinateOnClickEvent,
  isInTheHitBox,
} from '../../utils';
import { getCharacters, getHitBox } from '../../firebase/dbHelper';
import PopUp from './PopUpMenu';
import GameOverModal from './GameOverModal';

const Game = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [characters, setCharacters] = useState([]);
  const [currCoordinate, setCurrCoordinate] = useState([]);
  const [popUpPos, setPopUpPos] = useState({ top: 0, left: 0 });
  const [isPopupActive, setIsPopUpActive] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const [totalTime, setTotalTime] = useState(0);

  const [start, setStart] = useState(false);
  useEffect(() => {
    setStart(false);
    setIsPopUpActive(false);
  }, []);

  const startTheGame = async () => {
    const names = await getCharacters();
    const temp = [];

    names.forEach((name) => {
      temp.push({
        name,
        isFound: false,
      });
    });
    setStartTime(Date.now());
    setStart(true);

    setCharacters(temp);
  };

  const handleOnClick = (e) => {
    setIsPopUpActive(true);
    const pos = calculatePos(e);
    setCurrCoordinate(calculateRelativeCoordinateOnClickEvent(e));
    setPopUpPos({ top: pos[1], left: pos[0] });
  };

  const resetState = () => {
    setStart(false);
    setCharacters([]);
    setIsPopUpActive(false);
  };

  const handleOnCharacterChoice = async (characterName) => {
    try {
      const hitBox = await getHitBox(characterName);

      // check if player has found the given character on not
      // in the backend
      if (isInTheHitBox(hitBox, currCoordinate)) {
        setIsPopUpActive(false);
        const tempCharacters = [...characters];

        const chaIdx = tempCharacters.findIndex(
          (cha) => cha.name === characterName
        );

        tempCharacters[chaIdx].isFound = true;

        if (tempCharacters.every((cha) => cha.isFound)) {
          // alert(
          //   `It took you ${Math.floor((Date.now() - startTime) / 1000)} seconds`
          // );
          setTotalTime(Math.floor((Date.now() - startTime) / 1000));
          onOpen();
          resetState();
        }

        setCharacters(tempCharacters);
      } else {
        alert(`That wasn't ${characterName}.`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex w="full" mb={10} justify="center">
      <GameOverModal time={totalTime} isOpen={isOpen} onClose={onClose} />
      {start ? (
        <Container maxW="1920px" pos="relative">
          <PopUp
            names={characters.map((cha) => cha.name)}
            position={popUpPos}
            isActive={isPopupActive}
            choiceOnClick={handleOnCharacterChoice}
          />
          <Flex gap={1} mb={4}>
            <Text>Characters left to be found:</Text>
            <HStack>
              {characters
                .filter((cha) => !cha.isFound)
                .map((cha, idx) => {
                  return (
                    <Text key={idx} fontWeight="semibold">
                      {cha.name[0].toUpperCase() + cha.name.slice(1)}
                    </Text>
                  );
                })}
            </HStack>
          </Flex>
          <Image src={GameImg} w="full" onClick={handleOnClick} />
        </Container>
      ) : (
        <Button colorScheme="blue" mt={4} onClick={startTheGame}>
          Start the Game
        </Button>
      )}
    </Flex>
  );
};

export default Game;
