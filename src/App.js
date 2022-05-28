import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';

const App = () => {
  return (
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
};

export default App;
