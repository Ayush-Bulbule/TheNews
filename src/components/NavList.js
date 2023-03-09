import React from 'react'
import { Flex,HStack,Text } from '@chakra-ui/react'

const NavList = () => {
  return (
    <Flex width={'100%'} padding={1} alignItems={'center'} bg={'blue.500'} justifyContent={'center'}  _dark>
    <HStack align={'center'} cursor={'pointer'}>
      <Text color={'gray.200'} px={'2'} textColor={'black'}  fontWeight={'medium'} fontSize='md'>India</Text>
      <Text color={'gray.200'} px={'2'} textColor={'black'}  fontWeight={'medium'} fontSize='md'>India</Text>
      <Text color={'gray.200'} px={'2'} textColor={'black'}  fontWeight={'medium'} fontSize='md'>India</Text>
      <Text color={'gray.200'} px={'2'} textColor={'black'}  fontWeight={'medium'} fontSize='md'>India</Text>
    </HStack>
  </Flex>
  )
}

export default NavList