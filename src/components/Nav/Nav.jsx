import React from "react";
import styles from "./Nav.module.scss";

const Nav = (props) => {
  const { next, prev, info } = props;
  return (
    <>
      <div className={styles.navContainer}>
        <span onClick={prev}>PREV</span>
        <span onClick={info}>INFO</span>
        <span onClick={next}>NEXT</span>
      </div>
    </>
  );
};

export default Nav;
