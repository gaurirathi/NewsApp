import { useEffect ,useState} from 'react';
import {Box} from '@mui/material'
import { getnews } from '../service/api';
import Article from './Article';

const Articles=function(){
    const [news,setnews]=useState([]);

    useEffect(function(){
        dailynews();
    },[]);
    const dailynews=async function(){
        let response =await getnews();
        setnews(response.data);
    }
    return(
        <Box>
            {news.map(data =>(
                <Article data={data} />
                
            ))}
        </Box>   
    )
}
export default Articles;