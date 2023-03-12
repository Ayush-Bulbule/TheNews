import { Box, Flex, useBreakpointValue, Text, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import NavList from '../components/NavList'
import NewsItem from '../components/NewsItem'

const Category = () => {

    const { category } = useParams()
    const isMobile = useBreakpointValue({ base: true, md: false })

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        setIsLoading(true);

        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
            .then(response => {
                setData(response.data);
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error);
            });
    }, [category])
    return (
        <>
            <Navbar />
            <NavList />
            {(isLoading) ? <Loading /> : 
                <Box w={'full'} minH={'100vh'} paddingTop={'12'} h={'full'} bg={'gray.900'} p={'5'}>
                    <SimpleGrid alignItems={'center'} marginX={'auto'} width={'90%'} max justifyContent={'center'} spacing={'10'} columns={isMobile ? '1' : '3'}>
                      {
                        (data.articles.map((news, index) =><NewsItem data={news} key={index} />))
                      }  
                    </SimpleGrid>
                </Box>
            }
        </>
    )
}

export default Category