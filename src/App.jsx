import styles from "./App.module.scss";
import Title from "./components/Title";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";

function App() {
  const API_URL =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImage=true&q=";

  // const mediumArr = [
  //   "Silk",
  //   "Marble",
  //   "Bronze",
  //   "Clay",
  //   "Gold",
  //   "Metal",
  //   "Paper",
  //   "Stone",
  //   "Silver",
  //   "Copper",
  //   "Ivory",
  //   "Wood",
  //   "Glass",
  // ];

  // const medium = mediumArr[12];

  const [lastSearchTerm, setLastSearchTerm] = useState("");

  const [toggleInfo, setTottleInfo] = useState(false);

  const [medium, setMedium] = useState("");

  const [objectArr, setObjectArr] = useState([]);

  const zeroIndex = 1;

  const [index, setIndex] = useState(zeroIndex);

  const getObjects = (searchTerm) => {
    const string = `${API_URL}${searchTerm}&medium=${medium}`;
    setLastSearchTerm(searchTerm);
    console.log(string);
    return fetch(`${string}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        if (jsonResponse.objectIDs !== null) {
          increaseIndex();
          return jsonResponse.objectIDs;
        } else {
          return [];
        }
      });
  };

  const increaseIndex = () => {
    if (index <= objectArr.length) {
      setIndex(index + 1);
      console.log(index);
    }
  };

  const decreaseIndex = () => {
    if (index > 0) {
      setIndex(index - 1);
      console.log(index);
    }
  };

  const pulse = (lastSearch) => {
    setIndex(index - index);
    updateObjects(lastSearchTerm);
  };

  const updateObjects = async (searchTerm) => {
    const apiObjects = await getObjects(searchTerm);

    setObjectArr(apiObjects);
  };

  const updateMedium = (searchTerm) => {
    setMedium(searchTerm.innerText);
    pulse(lastSearchTerm);
  };

  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <div className={styles.inputBlock}>
          <Title />
          <Filter updateMedium={updateMedium} />
          <Search
            updateSearchText={updateObjects}
            medium={medium}
            onclick={increaseIndex}
          />
        </div>
        <div className={styles.outputBlock}>
          <Card objects={objectArr} index={index} />
          <Nav next={increaseIndex} prev={decreaseIndex} />
        </div>
      </div>
    </div>
  );
}

export default App;
