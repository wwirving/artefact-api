import styles from "./App.module.scss";
import Title from "./components/Title";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputBlock}>
        <Title />
        <Search />
        <Filter />
      </div>
      <div className={styles.outputBlock}>
        <Card />
        <Nav />
      </div>
    </div>
  );
}

export default App;
