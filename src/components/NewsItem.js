import { Card, Image, Stack,Divider,ButtonGroup, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react'
import React from 'react'

const NewsItem = ({data}) => {
    return (
        <Card minW="sm" maxW='sm' bg={'gray.800'}>
            <CardBody>
                <Image
                    src={data.urlToImage?data.urlToImage:'https://media.istockphoto.com/id/1193558441/vector/breaking-news-banner-template-breaking-news-background-for-screensaver-lower-third-red-and.jpg'}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' textColor={'white'}>{data.title}</Heading>
                    <Text textColor={'gray.200'}>
                        {data.description}
                    </Text>
                    <Text color='blue.600' fontSize='md' fontWeight={'bold'}>
                        Read Details
                    </Text>
                </Stack>
            </CardBody>
            
        </Card>
    )
}

export default NewsItem