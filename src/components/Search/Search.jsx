import React from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { updateSearchText } = props;

  return (
    <>
      <input
        type="text"
        placeholder="SEARCH PHRASE..."
        onInput={(e) => updateSearchText(e.target.value)}
      ></input>
    </>
  );
};

export default Search;
