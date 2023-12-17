import { Box,  Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { colors } from "../../constants/index";
import Category from "../Category/Category";
import { APISEREVICE } from "../../service/serviice";
import Videos from "../Videos/Videos";
function Main() {
  const [selected, setselected] = useState("New");
  const [videolar, setvideos] = useState([]);
  useEffect(() => {
    APISEREVICE.fetching("search", selected).then((data) =>
      setvideos(data.data.data)
    );
  }, [selected]);
  return (
    <div className="container">
      <Stack sx={{ mt: "70px" }}>
        <Category setselected={setselected} />
        <Box p={2} sx={{ height: "90vh" }}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selected} <span style={{ color: colors.secondary }}>videos</span>{" "}
          </Typography>
          <Videos videos={videolar} />
        </Box>
      </Stack>
    </div>
  );
}

export default Main;
