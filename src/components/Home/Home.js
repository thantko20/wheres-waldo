import React from 'react';
import {
  Container,
  Stack,
  Text,
  Heading,
  Link,
  Box,
  HStack,
  Button,
  VStack,
  OrderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
import CharacterPicItem from './CharacterPicItem';
import WallyImg from '../../assets/wally-small.png';
import Odlaw from '../../assets/odlaw.jpg';
import Wizard from '../../assets/wizard.jpeg';

const Home = () => {
  return (
    <Box w="full" flexGrow={1}>
      <Container maxW="container.md" h="full" py={20} px={10}>
        <Stack w="full" spacing={8}>
          <VStack>
            <Heading as="h3" fontSize="2xl">
              A photo-tagging app where you have to find the certain characters
            </Heading>
            <Text>
              This is based on a childhood game(you've probably played in your
              childhood) called{' '}
              <Link
                href="https://en.wikipedia.org/wiki/Where's_Wally"
                target="_blank"
                color="blue.500"
                fontWeight="semibold"
              >
                Where's Wally?
              </Link>
              . The instructions are relatively simple:
            </Text>
            <OrderedList>
              <ListItem>Find each character.</ListItem>
              <ListItem>
                Click on the character if you've found one of the given
                characters.
              </ListItem>
              <ListItem>
                There will be a dropdown box on click and choose which character
                it is that you just click.
              </ListItem>
              <ListItem>
                If you've found all of the characters. There will be a submit
                box to record the time you take to find the characters.
              </ListItem>
            </OrderedList>
          </VStack>

          <Box>
            <Text fontSize="2xl" fontWeight="semibold" mb={4}>
              Find these characters!
            </Text>
            <HStack spacing={6}>
              <CharacterPicItem imgSrc={WallyImg} label="Wally" />
              <CharacterPicItem imgSrc={Odlaw} label="Odlaw" />
              <CharacterPicItem imgSrc={Wizard} label="Wizard" />
            </HStack>
          </Box>
        </Stack>
        <Button colorScheme="blue" mt={10}>
          <RouteLink to="/game">Let's Play!</RouteLink>
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
