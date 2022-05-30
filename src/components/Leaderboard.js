import {
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getScoreboard } from '../firebase/dbHelper';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getScoreboard(setData);
  }, []);

  return (
    <Box w="full" mt={4} p="4">
      <TableContainer maxW="container.lg" mx="auto">
        <Table variant="striped" colorScheme="messenger">
          <TableCaption placement="top" fontWeight="semibold">
            Leaderboard
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>Time in Seconds</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((score, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{score.name}</Td>
                  <Td isNumeric>{score.time}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Leaderboard;
