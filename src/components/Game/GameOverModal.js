import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { recordTheScore } from '../../firebase/dbHelper';
import { useNavigate } from 'react-router-dom';

const GameOverModal = ({ time, isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    onClose();
    recordTheScore(inputValue, time);
    setInputValue('');
    navigate('/leaderboard');
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Good Job!</ModalHeader>
        <ModalBody>
          <Text mb={8}>You finished in {time} seconds.</Text>
          <form id="nameForm" onSubmit={handleOnSubmit}>
            <label htmlFor="name">Enter your name</label>
            <Input
              name="name"
              id="name"
              onChange={handleOnChange}
              value={inputValue}
              required
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="whiteAlpha" variant="outline" onClick={onClose}>
            Play Again
          </Button>
          <Button colorScheme="blue" type="submit" form="nameForm">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GameOverModal;
