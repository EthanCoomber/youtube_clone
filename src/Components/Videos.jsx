import { Stack, Box, CircularProgress, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({videos, direction}) => {

    if (!videos?.length) return (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh" flexDirection="column">
            <CircularProgress size={60} thickness={4} sx={{ color: 'navy', mb: 2 }} />
            <Typography variant="h6" color="textSecondary">
                Loading videos...
            </Typography>
        </Box>
    );

    console.log(videos)

    return (
        <Stack 
            direction={direction || "row"} 
            flexWrap="wrap" 
            justifyContent="space-evenly"
            alignItems="center"
            gap={2}
            sx={{
                width: '100%',
                maxWidth: '100%'
            }}
        >
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}/>}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos