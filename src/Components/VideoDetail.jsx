import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <div style={{ 
              width: "90%", 
              height: "80%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${id}`} 
                className="react-player"
                controls
                width="100%"
                height="100%"
              style={{
                backgroundColor: '#000000',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 1
                  }
                }
              }}
            />
            </div>
            <Typography 
              color="navy" 
              variant="h5" 
              fontWeight="bold"
              sx={{
                fontSize: { xs: '18px', sm: '20px', md: '22px' },
                // lineHeight: 1.2,
                mt: 2,
                ml: 2,
                mb: 1,
                letterSpacing: '-0.3px',
                wordBreak: 'break-word',
                maxWidth: '100%',
                marginTop: '12px',
                marginBottom: '4px',
                fontFamily: 'Roboto, Arial, sans-serif',
                '&:hover': {
                  color: '#000066'
                }
              }}
            >
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "navy" }} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography 
                  variant={{ sm: "h6", md: 'h4' }}  // Increased text size
                  color="navy"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    background: 'linear-gradient(90deg, rgba(0,0,128,0.05) 0%, rgba(0,0,128,0.02) 100%)',
                    padding: '12px 24px', // Increased padding
                    borderRadius: '12px', // Increased border radius
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Increased shadow
                    fontWeight: 'bold', // Made text bold
                    '&:hover': {
                      transform: 'translateY(-3px) scale(1.03)', // Increased hover effect
                      background: 'linear-gradient(90deg, rgba(0,0,128,0.15) 0%, rgba(0,0,128,0.08) 100%)', // Increased gradient opacity
                      boxShadow: '0 6px 12px rgba(0,0,128,0.15)', // Increased hover shadow
                      textDecoration: 'none'
                    }
                  }}
                >
                  {channelTitle}
                  <CheckCircleIcon sx={{ 
                    fontSize: "20px", // Increased icon size
                    color: "navy", 
                    ml: "12px", // Increased margin
                    
                  }} />
                </Typography>
              </Link>
              <Stack 
                direction="row" 
                gap="20px" 
                alignItems="center"
                sx={{
                  background: 'linear-gradient(90deg, rgba(0,0,128,0.1) 0%, rgba(0,0,128,0.05) 100%)',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "navy",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: 500
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "navy",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: 500
                  }}
                >
                  ❤️ {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;