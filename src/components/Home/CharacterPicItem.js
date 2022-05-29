import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const CharacterPicItem = ({ imgSrc, label }) => {
  return (
    <Box borderRadius="md" overflow="hidden" bg="red.500">
      <Image boxSize="150px" src={imgSrc} alt={label} fallback />
      <Text align="center" color="white">
        {label}
      </Text>
    </Box>
  );
};

export default CharacterPicItem;
