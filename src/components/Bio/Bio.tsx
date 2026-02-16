import React from "react";
import styles from "./Bio.module.css";
import logo from "../../assets/image/logo.jpg"

const Bio: React.FC = () => {
  return (
    <div className={styles.bio}>
      <img className={styles.bio__image} src={logo}/>

      <div className={styles.bio__text}>
        <div className={styles.bio__name}> {'<Magomedov Magomedrasul>'} </div>
        <div className={styles.bio__profession}>React/React-native devoleper</div>
      </div>

    </div>
  );
};

export default Bio;
