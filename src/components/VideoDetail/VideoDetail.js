import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APISEREVICE } from "../../service/serviice";
import { Box, Chip, Container, Typography, Stack, Avatar, CardMedia } from "@mui/material";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Visibility,
} from "@mui/icons-material";
import ReactPlayer from "react-player";
import { Tag } from "@mui/icons-material";
function VideoDetail() {
  const { id } = useParams();
  console.log(id);
  const [videodetail, setVideodetail] = useState([]);
  const [related, setrelated] = useState([]);
  useEffect(() => {
    APISEREVICE.fetchingVideos(id).then((item) => setVideodetail(item));
  }, [id]);

  useEffect(() => {
   APISEREVICE.related(id).then((item) => setrelated(item.data.data))
  }, [id])
  console.log(related);
  return (
    <Box minHeight={"90vh"} sx={{ marginTop: "90px" }}>
      <Container maxWidth={"90%"}>
        <Box sx={{display :`flex` , flexDirection :{ lg: "row", sm: "row", md: "column", xs: "column" }}} gap={'15px'}>
          <Box width={{ lg: "75%", sm: "75%", md: "100%", xs: "100%" }}  >
            <ReactPlayer
              className={"reactplayer"}
              url={`https://www.youtube.com/watch?v=${id}`}
              playing
              controls
              width="100%"
              height="550px"
            />
            <Typography variant="h5" fontWeight={"bold"} p={"2px"}>
              {videodetail?.data?.title}{" "}
            </Typography>

              <Stack direction={'row'} gap={'15px'}>
          <Stack sx={{opacity :0.7 , display :'flex' , flexDirection:'row' , alighItems :'center' , gap:'3px' } } > <Visibility/>{parseInt(videodetail?.data?.viewCount)} view </Stack>
          <Stack sx={{opacity :0.7 , direction:'row' , alighItems :'center' , gap:'3px' } } > <FavoriteOutlined/> {videodetail?.data?.likeCount} </Stack>
          <Stack sx={{opacity :0.7 , direction:'row' , alighItems :'center' , gap:'3px' } } > <MarkChatRead/> {videodetail?.data?.comentCount} </Stack>
            </Stack>
            <Box direction={"row"}  >
              
              <Stack
                direction={"row"}
                position={"abspolute"}
                bottom={"10px"}
                left={"10px"}
                alignItems={"center"}
                gap={"5px"}
              >
                <Avatar
                  // src={videodetail?.data?}
                  sx={{ width: "30px", height: "30px" }}
                />
                <Typography
                  my={1}
                  sx={{
                    opacity: ".4",
                    fontSize: "13px",
                    display: "flex",
                    gap: "7px",
                    alignItems: "center",
                  }}
                >
                  {videodetail?.data?.channelTitle}
                  <CheckCircle width={"5px"} sx={{ width: "15px" }} />
                </Typography>
              </Stack>
            </Box>
            {videodetail?.data?.keywords
              ? videodetail.data.keywords.map((item, key) => (
                  <Chip
                    label={item}
                    key={key}
                    sx={{ cursor: "pointer", mt: "10px", ml: "10px" }}
                    deleteIcon={<Tag />}
                  />
                ))
              : ""}
            <br />
            <Typography variant="p" width={'95%'} p={"2px"}>
              {videodetail?.data?.description}
            </Typography>
          </Box>
          <Box width={{ lg: "25%", sm: "25%", md: "100%", xs: "100%" }}>
            <Stack gap={'15px'} >
              {
                related.map(item=>(
                  <Link to={`/video/${item.videoId}`}>
                  <CardMedia  alt="oidjoidj"  image={item.thumbnail[1].url}  sx={{ width: "350px", height: "180px" }}  />
                </Link>))
              }
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default VideoDetail;
