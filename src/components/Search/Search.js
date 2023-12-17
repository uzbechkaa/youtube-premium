import {  Stack } from "@mui/material";
import React from "react";
import { useEffect , useState } from "react";
import { APISEREVICE } from "../../service/serviice";
import { useParams } from "react-router-dom";
import SearchedCard from "../SearchedCard/SearchedCard";
function Search() {
  const selected = useParams();
  const  [videos , setvideos] = useState([])
  useEffect(() => {
    APISEREVICE.fetching('search', selected.id).then(data => setvideos(data.data.data
      ))  }, [selected])
  return (
    <Stack sx={{ mt: "70px" }}>
      <div className="container" >
        <Stack gap={'25px'} width={'80%'} margin={'auto'}>
          {
        videos?.map(item =>(
          <SearchedCard video={item} />
        ))
        }
        </Stack>
      </div>
    </Stack>
  );
}

export default Search;
