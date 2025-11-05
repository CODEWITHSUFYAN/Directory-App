import React, { useContext } from "react";
import { UserContext } from "../context/Context.jsx"

const SearchBar = () => {
  const { search, setSearch } = useContext(UserContext);

  return (
    <input
      type="text"
      placeholder="Search user by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
