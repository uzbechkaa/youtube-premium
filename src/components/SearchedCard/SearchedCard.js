import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../constants";
import { CheckCircle } from "@mui/icons-material";
function SearchedCard({video}) {
  return (
    <Link  key={video.videoId}
      to={`/video/${video.videoId}`}
      style={{ color: "white", textDecoration: "none" }}
    >
      <Card
      
        sx={{
          width: "100%",
          height: { lg: "220px", sm: "180px", md: "130px", xs: "100px" },
          boxShadow: "none",
          background: "#394867",
          borderRadius: "none",
          color: "white",
          display:'flex' ,
          flexDirection :'row',
          position: "relative",
        }}
      >
        <CardMedia
          image={video.thumbnail[0].url}
          alt="oidjoidj"
          sx={{
            width: '30%',
            height: "100%",
          }}
        />

        <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} paddingY={'15px'} paddingX={'10px'} >
          <CardContent
            sx={{
              position: "relative",
              paddingX: "9px",
              paddingY: "3px",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              {video?.title.slice(0, 100)}..
            </Typography>
            <Typography sx={{ fontSize: "12px", opacity: "0.6" }}>
              {video?.description.slice(0, 150)}..
            </Typography>
            <Typography my={1} sx={{ opacity: ".4", fontSize: "10px" }}>
              {video?.publishedText}
            </Typography>
          </CardContent>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={"10px"}
          >
          <Avatar
            src={video?.channelThumbnail[0].url}
            sx={{ width: "30px", height: "30px" }}
            />
          <Typography
            // my={1}
            sx={{
                opacity: ".4",
                fontSize: "13px",
                display: "flex",
                gap: "7px",
                alignItems: "center",
            }}
            >
            {video?.channelTitle}
            <CheckCircle sx={{ width: "13px" }} />
          </Typography>
        </Stack>
              </Box>
      </Card>
    </Link>
  );
}

export default SearchedCard;
