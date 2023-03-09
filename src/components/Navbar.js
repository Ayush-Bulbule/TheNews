import { Box, Container, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/news.png'

const Navbar = () => {
  return (
    
    <Container maxW='screen' centerContent padding={'3'} bg={'gray.900'} >
      <Flex width={'80%'} alignItems={'center'} justifyContent={'center'}  _dark>
        <HStack align={'center'}>
          <Image borderRadius='full' boxSize='2.5rem' src={logo} />
          <Text color={'gray.200'} fontFamily={`'Noto Serif', serif`} fontWeight={'medium'} fontSize='xl'>The News </Text>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar