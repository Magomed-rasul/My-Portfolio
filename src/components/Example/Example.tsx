import React from "react";
import ExampleCase from "../ExampleCase/ExampleCase";
import styles from "./Example.module.css"

const ExampleList: React.FC = () => {
  const items = [
    { type: "web", image: "/images/web1.jpg", title: "Заголовок 1", desc: "Описание проекта 1" },
    { type: "mobile", image: "/images/mob1.jpg", title: "Заголовок 2", desc: "Описание мобильного приложения" },

  ];

  return (
    <div className={styles.scrollContainer}>
      {items.map((item, index) => (
        <ExampleCase key={index} {...item} />
      ))}
    </div>
  );
};

export default ExampleList;