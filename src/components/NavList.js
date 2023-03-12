import React from 'react'
import { Flex, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NavList = () => {

  const isMobile = useBreakpointValue({ base: true, md: false })

  let categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  return (
    <Flex display={isMobile ? 'none' : 'flex'} width={'100%'} padding={1} alignItems={'center'} bg={'blue.500'} justifyContent={'center'} _dark>
      <Stack direction={isMobile ? 'column' : 'row'} align={'center'} cursor={'pointer'}>
        {
          categories.map((category, index) => (
            <RouterLink to={'/cat/'+category}>

              <Text color={'gray.200'} px={'2'} textColor={'black'} fontWeight={'medium'} fontSize='md' key={index} textTransform="capitalize" border={isMobile ? '0.5' : 'none'}>
                {category}
              </Text>
            </RouterLink>
          ))
        }

      </Stack>
    </Flex>
  )
}

export default NavList