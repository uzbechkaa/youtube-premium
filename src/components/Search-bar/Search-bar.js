import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Searchbar() {
  const [search, setsearch] = useState("");

  const navigate = useNavigate();
  const handlecharger = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
    }
  };
  return (
    <Paper
      onSubmit={handlecharger}
      component={"form"}
      sx={{
        border: `1px solid goldenrod`,
        borderRadius: "15px",
        pl: "0",
        display: "flex",
        width: { lg: "320px", sm: "220px", md: "250px", xs: "120px" },
        flexDirection: "row",
        justifyContent: "space-between",
        boxShadow: "none",
        background: "#212A3E",
      }}
    >
      <input
        type="text"
        placeholder="Search...."
        className="searchbar"
        style={{ width: "80%", marginLeft: "15px" }}
        onChange={(e) => setsearch(e.target.value)}
        value={search}
      />
      <IconButton type="submit">
        <Search sx={{ color: "white" }} />
      </IconButton>
    </Paper>
  );
}

export default Searchbar;
