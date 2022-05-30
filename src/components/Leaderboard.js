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
  Heading,
} from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'scoreboard'));

      const tempData = [];
      querySnapshot.forEach((entry) => {
        tempData.push(entry);
      });

      setData(() => {
        const scores = tempData.map((item) => item.data());

        scores.sort((a, b) => a.time - b.time);

        return scores;
      });
    };

    getData();
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
