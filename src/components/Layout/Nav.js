import React from 'react';
import {
  Heading,
  HStack,
  Stack,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Icon,
  Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AiOutlineHome } from 'react-icons/ai';
import { FaFlag } from 'react-icons/fa';
import { Link as RouteLink } from 'react-router-dom';

const Logo = () => {
  const [isLargerThan430] = useMediaQuery('(min-width: 430px)');

  return (
    <Heading as="h1" fontSize={isLargerThan430 ? '2xl' : 'inherit'}>
      Where's Waldo?
    </Heading>
  );
};

const NavLink = ({ path, icon, children }) => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Link as={RouteLink} to={path}>
      {isLargerThan600 ? (
        <Box fontWeight="semibold">{children}</Box>
      ) : (
        <Box aria-label={children}>
          <Icon as={icon} />
        </Box>
      )}
    </Link>
  );
};

const ThemeToggleIcon = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  );
};

const Nav = () => {
  return (
    <Stack
      as="nav"
      direction="row"
      justify="space-between"
      p={[8, 4]}
      color={useColorModeValue('gray.900', 'gray.100')}
      align="center"
      position="sticky"
    >
      <Logo />
      <HStack spacing={6}>
        <ThemeToggleIcon />
        <NavLink path="/" icon={AiOutlineHome}>
          Home
        </NavLink>
        <NavLink path="/leaderboard" icon={FaFlag}>
          Leaderboard
        </NavLink>
      </HStack>
    </Stack>
  );
};

export default Nav;
