import { Box, Flex, useBreakpointValue, Text, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import NavList from '../components/NavList'
import NewsItem from '../components/NewsItem'

const Home = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(false);

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
            setData(response.data);
            setIsLoading(false);
            console.log(response.data);
            setError(false);
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }

    useEffect(() => {
      fetchNews();
    
    }, [])
    

    return (
        error? <Text textAlign={'center'} my={'auto'}>505 | Something went wrong</Text>:
        <>
            <Navbar />
            <NavList />
            {(isLoading) ? <Loading /> :
                <Box w={'full'} minH={'100vh'} paddingTop={'12'} h={'full'} bg={'gray.900'} p={'5'}>
                    <SimpleGrid alignItems={'center'} marginX={'auto'} width={'90%'} max justifyContent={'center'} spacing={'10'} columns={isMobile ? '1' : '3'}>
                        {
                            (data.articles.map((news, index) => <NewsItem data={news} key={index} />))
                        }

                    </SimpleGrid>
                </Box>
            }
        </>
    )
}

export default Home