import React from "react";
import styles from "./ExampleCase.module.css";

interface ExampleCaseProps {
  type: "mobile" | "web";
  image: string;           // путь к изображению (string, а не HTMLImageElement)
  title: string;
  desc: string;
}

const ExampleCase: React.FC<ExampleCaseProps> = ({ type, image, title, desc }) => {
  // Определяем класс для обёртки картинки в зависимости от типа
  const imageWrapperClass = 
    type === "web" 
      ? `${styles.ExampleCase__imageWrapper} ${styles.ExampleCase__imageWrapper_web}`
      : `${styles.ExampleCase__imageWrapper} ${styles.ExampleCase__imageWrapper_mobile}`;

  return (
    <div className={styles.ExampleCase}>
      <div className={imageWrapperClass}>
        <img className={styles.ExampleCase__image} src={image} alt={title} />
      </div>
      <div className={styles.ExampleCase__title}>{title}</div>
      <div className={styles.ExampleCase__desc}>{desc}</div>
    </div>
  );
};

export default ExampleCase;