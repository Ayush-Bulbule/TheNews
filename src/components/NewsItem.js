import { Card, Image, Stack,Divider,ButtonGroup, CardBody, Heading, Text, CardFooter, Button, Link } from '@chakra-ui/react'
import React from 'react'
import newsposter from '../assets/newsposter.gif'

const NewsItem = ({data}) => {
    return (
        <Card minW="sm" maxW='sm' bg={'gray.800'} h={'full'}>
            <CardBody>
                <Image
                    src={data.urlToImage?data.urlToImage:newsposter}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    minH={180}
                    maxH={180}
                    w={'full'}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' textColor={'white'}  noOfLines={[1,2]}>{data.title}</Heading>
                    <Text  noOfLines={[1,2,3]} textColor={'gray.200'}>
                        {data.description?data.description:'To read full news Head to the source website. Just click the "read more" below. You will be redirected to source. '}
                    </Text>
                    <Link isExternal href={data.url} isTruncated noOfLines={6} color='blue.600' fontSize='md' fontWeight={'bold'}>
                        Read Details
                    </Link>

                </Stack>
            </CardBody>
            
        </Card>
    )
}

export default NewsItem