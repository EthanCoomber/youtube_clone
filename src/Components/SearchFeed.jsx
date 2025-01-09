import { useState, useEffect } from 'react';
import { Box, Typography} from "@mui/material"
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams()

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => {
          console.log(data.items)
          setVideos(data.items)
        })
    }, [searchTerm]);

    return (
      <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"navy"}}>
          Search results for: <span
                  style={{color: "#F0F0F0", fontWeight: "bold", fontSize: "1.1em", backgroundColor: "#000080", padding: "0.2em 0.4em", borderRadius: "4px"}}
              >
                  {searchTerm}
              </span> videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
    )
}

export default SearchFeed