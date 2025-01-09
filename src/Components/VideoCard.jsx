import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
    <Card sx={{ 
        width: { xs: '100%', sm: '358px', md: "350px" },
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "15px",
        border: "1px solid #e3e3e3",
        transition: "all 0.3s ease",
        backgroundColor: "#FFFFFF",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
        }
    }}>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia 
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
            alt={snippet?.title} 
            sx={{ 
                width: '100%',
                height: 225,
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                transition: "all 0.3s ease",
                "&:hover": {
                    filter: "brightness(1.1)"
                }
            }} 
        />
        </Link>
        <CardContent sx={{ 
            backgroundColor: "#FFFFFF", 
            height: '56px',
            padding: "12px",
            "&:last-child": {
                paddingBottom: "12px"
            }
        }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } style={{ textDecoration: 'none' }}>
            <Typography 
                variant="subtitle1" 
                fontWeight="bold"
                color="#0F0F0F"
                sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1.2em",
                    marginBottom: "4px",
                    fontSize: "0.95rem",
                    transition: "color 0.2s ease",
                    "&:hover": {
                        color: "#065FD4"
                    }
                }}
            >
            {snippet?.title || demoVideoTitle}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: 'none' }}>
            <Typography 
                variant="body2" 
                color="#606060"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.8rem",
                    fontWeight: 400,
                    marginTop: "6px",
                    transition: "color 0.2s ease",
                    "&:hover": {
                        color: "#0F0F0F"
                    }
                }}
            >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "13px", color: "#606060", ml: "4px" }} />
            </Typography>
        </Link>
        </CardContent>
    </Card>
);

export default VideoCard