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

const GameOverModal = ({ time, isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = () => {
    onClose();
    setInputValue('');
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Good Job!</ModalHeader>
        <ModalBody>
          <Text mb={8}>You finished in {time} seconds.</Text>
          <form>
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
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            onClick={() => {
              onClose();
            }}
          >
            Play Again
          </Button>
          <Button colorScheme="blue" onClick={handleOnSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GameOverModal;
