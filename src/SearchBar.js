import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ users, callbackSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    callbackSearch(search);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Search User"
          variant="standard"
          value={search}
          onChange={handleSearch}
          sx={{ width: "100%" }}
        />
      </Box>
      {/* <label>Search </label>
      <input type="text" value={search} onChange={handleSearch} /> */}
    </>
  );
};

export default SearchBar;
