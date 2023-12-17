import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "../VideoCard/VideoCard";
import { Skeleton } from "@mui/material";
function Videos({ videos }) {
  if (videos.length === 0) {
    return (
      <Stack
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alighitems={"center"}
        gap={2}
      >
        {"jjfasdfg".split("").map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "320px",
              height: "300px",
              flexDirection: "column",
              padding: 0,
            }}
          >
            <Skeleton
              animation={"wave"}
              variant="rectangular"
              width={320}
              height={150}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Skeleton
                animation={"wave"}
                variant="circular"
                width={40}
                height={40}
              />
              <Skeleton
                animation={"wave"}
                variant="rounded"
                width={270}
                height={60}
              />
            </div>
          </div>
        ))}
      </Stack>
    );
  }

  return (
    <Stack
     
    >
      <Box  width={"100%"}
      display={"flex"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-between"}
      alighitems={"center"}
      gap={2}>
        {videos.map((item) => (
          <VideoCard video={item} />
        ))}
      </Box>
    </Stack>
  );
}

export default Videos;
