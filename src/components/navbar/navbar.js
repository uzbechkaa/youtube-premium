import { Box, Stack } from "@mui/material";
import React from "react";
import icona from '../../images/icon.png'
import Searchbar from "../Search-bar/Search-bar";
function Navbar() {
  return (
    <Stack
      sx={{
        position: "fixed",
        top: "0",
        zIndex: "3330",
      }}
      className="navbar"
    >
      <div className="container">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={"10px"}
          width={'100%'}
        >
         <img src={icona} width={100}alt="logo" />
          <Searchbar />
          <Box
            sx={{
              display: { lg: "block", sm: "block", md: "block", xs: "none" },
            }}
          />
        </Stack>
      </div>
    </Stack>
  );
}

export default Navbar;
