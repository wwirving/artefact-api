import React from "react";
import styles from "./Card.module.scss";
import { useState, useEffect } from "react";

const Card = (props) => {
  const { objects, index } = props;

  const API_URL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

  const [sculpture, setSculpture] = useState({});

  const getSculpture = (theIndex) => {
    const string = `${API_URL}${objects[theIndex]}`;
    return fetch(`${string}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        if (jsonResponse !== null) {
          return jsonResponse;
        } else {
          return [];
        }
      });
  };

  const updateSculpture = async (currentIndex) => {
    const apiObject = await getSculpture(currentIndex);
    setSculpture(apiObject);
    console.log(sculpture);
    console.log(index);
    console.log(objects);
  };

  useEffect(() => updateSculpture(index), [props.index]);

  useEffect(() => updateSculpture(index), [props.objects]);

  return (
    <>
      <div className={styles.imgBox}>
        <div className={styles.description}>
          <p>TITLE - {sculpture.objectName}</p>
          <p>MEDIUM - {sculpture.medium}</p>
          <p>DATE - {sculpture.objectDate}</p>
        </div>
        <img src={sculpture.primaryImage} alt="" />
      </div>
    </>
  );
};

export default Card;
