import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./Header.module.css";

const Header = ({ func }) => {
  const searchRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    func(searchRef.current.value);
    searchRef.current.value = "";
  };
  return (
    <div className={classes.container}>
      <h1>Anime</h1>
      <form className={classes.form}>
        <input ref={searchRef} placeholder="search" />
        <button onClick={handleSubmit}>
          <SearchIcon className={classes.icon} />
        </button>
      </form>
    </div>
  );
};

export default Header;
