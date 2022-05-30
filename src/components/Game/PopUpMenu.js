import { Box, Flex, Heading, VStack, Text, Button } from '@chakra-ui/react';

const PopUp = ({ names, isActive, position: { top, left }, choiceOnClick }) => {
  if (isActive && names) {
    return (
      <Box
        pos="absolute"
        top={`${top + 22}px`}
        left={`${left}px`}
        pointerEvents="none"
      >
        <Box
          bg="transparent"
          border="4px"
          borderStyle="dashed"
          borderColor="black"
          borderRadius="full"
          w={8}
          h={8}
        ></Box>
        <Flex
          direction="column"
          gap={2}
          bg="white"
          color="gray.800"
          pointerEvents="all"
          mt={2}
          borderRadius={4}
          p={2}
        >
          <Heading as="h3" fontSize="md" mb={2}>
            Who&apos;s this?
          </Heading>
          <VStack>
            {names.map((name, idx) => (
              <Button
                key={idx}
                variant="link"
                color="blue.900"
                size="sm"
                fontWeight="medium"
                onClick={() => choiceOnClick(name)}
              >
                <Text>{name[0].toUpperCase() + name.slice(1)}</Text>
              </Button>
            ))}
          </VStack>
        </Flex>
      </Box>
    );
  }
};

export default PopUp;
