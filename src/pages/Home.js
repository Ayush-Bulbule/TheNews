import { Box, Flex,useBreakpointValue,Text, SimpleGrid } from '@chakra-ui/react'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import NavList from '../components/NavList'
import NewsItem from '../components/NewsItem'

const Home = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=9f20b8ebd7644893be19ad62e1232cb9')
        .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          }); 
    }, [])
    

    return (
        <>
            <Navbar />
            <NavList />
            <Box w={'full'} minH={'100vh'} paddingTop={'12'} h={'full'} bg={'gray.900'} p={'5'}>
                <SimpleGrid alignItems={'center'} marginX={'auto'} width={'90%'} max justifyContent={'center'} spacing={'10'} columns={isMobile?'1':'3'}>
                   {
                    (!data)?<Text>No Data</Text>:(data.articles.map((news,index)=><NewsItem data={news} key={index}/>))
                   }

                </SimpleGrid>
            </Box>
        </>
    )
}

export default Home