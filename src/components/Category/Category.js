import {  Stack } from "@mui/material";
import React from "react";
import { category, colors } from "../../constants";
import { NavLink } from "react-router-dom";
function Category({setselected}) {
  return (
    <div className="container" >
        <Stack direction={"row"} sx={{ height: "auto", overflowX: "scroll" }} >
      {category.map((item , i) => (
        <NavLink  key={i}>
        <button onClick={() => setselected(item.name)}
          style={{ borderRadius: 0 }}
          key={item.name}
          className="category-btn"
        >
          <span className={{ color: colors.secondary, marginRight: "15px" }}>
            {item.icon}
          </span>{" "}
          <span style={{opacity : 1}}>{item.name}</span>
        </button>
        </NavLink>
      ))}
    </Stack>
    </div>
    
  );
}

export default Category;
