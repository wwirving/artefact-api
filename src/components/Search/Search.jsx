import React from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { updateSearchText, onclick } = props;

  return (
    <>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="SEARCH PHRASE..."
          onInput={(e) => updateSearchText(e.target.value)}
        ></input>
        <div className={styles.searchButton}>
          <p onClick={onclick}>SEARCH</p>
        </div>
      </div>
    </>
  );
};

export default Search;
