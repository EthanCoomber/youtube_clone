import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"
const ChannelCard = ({ channelDetail, marginTop }) => (
    <Box
        sx={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: '356px', md: '320px'},
            // height: "326px",
            margin: "auto",
            marginTop,
            height: "100%",
            backgroundColor: "#FFFFFF",
            transition: "all 0.3s ease",
            "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
            }
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "navy"
                }}
            >
                <CardMedia 
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{
                        borderRadius: "50%",
                        height: "180px",
                        width: "180px",
                        mb: 2,
                        border: "2px solid navy",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)"
                        }
                    }}
                />
                <Typography variant="h6" sx={{fontWeight: "bold"}}>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx= {{fontSize: 14, color: "navy", ml: '5px'}}/>
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography sx={{color: "navy", opacity: 0.9}}>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)

export default ChannelCard