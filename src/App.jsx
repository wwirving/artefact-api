import styles from "./App.module.scss";
import Title from "./components/Title";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const API_URL =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Sculpture&&";

  const medium = "Marble";

  const [objectArr, setObjectArr] = useState([]);

  const [index, setIndex] = useState(0);

  const getObjects = (searchTerm) => {
    const string = `${API_URL}${medium}&q=${searchTerm}&hasImage`;
    return fetch(`${string}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        if (jsonResponse.objectIDs !== null) {
          return jsonResponse.objectIDs;
        } else {
          return [];
        }
      });
  };

  const increaseIndex = () => {
    setIndex(index + 1);
  };

  const decreaseIndex = () => {
    setIndex(index - 1);
  };

  const updateObjects = async (searchTerm) => {
    const apiObjects = await getObjects(searchTerm);

    setObjectArr(apiObjects);
  };

  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>
        <div className={styles.inputBlock}>
          <Title />
          <Search updateSearchText={updateObjects} />
          <Filter />
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
