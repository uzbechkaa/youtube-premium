import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

function VideoCard({ video }) {
  console.log(video);
  return (
    <Card
      key={video.videoId}
      sx={{
        width: {lg : "340px" , sm : "220px" , md: '250px' , xs :"100%" },
        height: "280px",
        boxShadow: "none",
        background:"#394867" ,
        borderRadius: "none",
         color:'white', 
         position :'relative'
      }}
    >
      <Link to={`/video/${video.videoId}` } style={{color
      :'white' , textDecoration:'none'}} ><CardMedia
        image={video.thumbnail[0].url}
        alt="oidjoidj"
        sx={{ width: {lg : "340px" , sm : "220px" , md: '250px' }, height: "150px" }}
      />
     
      
      <>
        <CardContent
          sx={{
            // backgroundColor: colors.primary,
            position: "relative",
            paddingX: "9px",
            paddingY:'3px'
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            {video?.title.slice(0, 40)}..
          </Typography>
          <Typography sx={{ fontSize: "12px", opacity: "0.6" }}>
            {video?.description.slice(0, 70)}..
          </Typography>
          <Typography my={1} sx={{ opacity: ".4", fontSize: "10px" }}>
            {video?.publishedText}
          </Typography>
        </CardContent>
      </>
      <Stack
        direction={"row"}
        position={"absolute"}
        bottom={"5px"}
        left={"9px"}
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
          <CheckCircle  sx={{ width: "13px" }} />
        </Typography>
      </Stack>
      </Link>
    </Card>
  );
}

export default VideoCard;
