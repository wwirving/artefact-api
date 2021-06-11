import React from "react";
import styles from "./Card.module.scss";
import { useState, useEffect } from "react";

const Card = (props) => {
  const { objects, index } = props;

  const API_URL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

  const [sculpture, setSculpture] = useState({});

  const [image, setImage] = useState("");

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
  };

  const updateImage = (currentSculpture) => {
    if (Object.keys(sculpture).length > 1) {
      if (sculpture.primaryImage.length > 1) {
        setImage(sculpture.primaryImage);
      } else {
        setImage(sculpture.additionalImages[0]);
      }
    } else return "";
  };

  useEffect(() => {
    updateSculpture(index);
  }, [props.index]);

  useEffect(() => updateSculpture(index), [props.objects]);

  useEffect(() => updateImage(sculpture), [props.index]);

  return (
    <>
      <div className={styles.imgBox}>
        <div className={(styles.description, styles.opaque)}>
          <p>TITLE -{sculpture.title}</p>
          <p>MEDIUM - {sculpture.medium}</p>
          <p>DATE - {sculpture.objectDate}</p>
        </div>
        <img src={image} alt="" onerror="this.style.display='none'" />
      </div>
    </>
  );
};

export default Card;
