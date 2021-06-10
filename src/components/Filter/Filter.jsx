import React from "react";
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <>
      <div className={styles.filterContainer}>
        <p className={styles.title}>MEDIUM</p>
        <div className={styles.filters}>
          <ul>
            <li>
              <div className={styles.libox}>
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="14"
                      height="14"
                      stroke="white"
                    />
                  </svg>
                </div>
                <p>MARBLE</p>
              </div>
            </li>
            <li>
              <div className={styles.libox}>
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="14"
                      height="14"
                      stroke="white"
                    />
                  </svg>
                </div>
                <p>GLASS</p>
              </div>
            </li>
            <li>
              <div className={styles.libox}>
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="14"
                      height="14"
                      stroke="white"
                    />
                  </svg>
                </div>
                <p>WOOD</p>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div className={styles.libox}>
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="14"
                      height="14"
                      stroke="white"
                    />
                  </svg>
                </div>
                <p>FABRIC</p>
              </div>
            </li>
            <li>
              <div className={styles.libox}>
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="14"
                      height="14"
                      stroke="white"
                    />
                  </svg>
                </div>
                <p>IRON</p>
              </div>
            </li>
            <li>
              <div className={styles.libox}>
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="14"
                      height="14"
                      stroke="white"
                    />
                  </svg>
                </div>
                <p>MISC</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
