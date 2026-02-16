import React from "react";
import styles from "./ExampleCase.module.css";

interface ExampleCaseProps {
  type: "mobile" | "web";
  image: HTMLImageElement;
  title: string;
  desc: string;
}

const ExampleCase: React.FC<ExampleCaseProps> = ({ image, title, desc }) => {
  return (
    <div className={styles.ExampleCase}>

      <div className={styles.ExampleCase__imageWrapper}>
        <img className={styles.ExampleCase__image} src={image} />
      </div>

      <div className={styles.ExampleCase__title}>{title}</div>
      <div className={styles.ExampleCase__desc}>{desc}</div>
      
    </div>
  );
};

export default ExampleCase;
