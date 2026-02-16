import React from "react";
import styles from "./About.module.css";


const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__heading}></div>
      <div className={styles.about__text}></div>
    </div>
  );
};

export default About;
