import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loading = () => {
    return (
        <Box minH={'screen'} w={'screen'}>
            <Flex alignItems={'center'} justifyContent={'center'} >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Flex>
        </Box>
    )
}

export default Loading