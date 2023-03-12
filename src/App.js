import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './pages/Category';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cat/:category" element={<Category/>}/>

      </Routes>
    </ChakraProvider>
  );
}

export default App;
