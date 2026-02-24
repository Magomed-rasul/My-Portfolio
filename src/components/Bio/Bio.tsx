import React, { useState, useEffect } from "react";
import styles from "./Bio.module.css";
import logo from "../../assets/image/logo.jpg";

const Bio: React.FC = () => {
  const name = "<Магомедов Магомедрасул>";
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    if (displayedLength < name.length) {
      const timer = setTimeout(() => {
        setDisplayedLength((prev) => prev + 1);
      }, 120); // 0.12 секунды на букву
      return () => clearTimeout(timer);
    }
  }, [displayedLength, name.length]);

  return (
    <div className={styles.bio}>
      <img
        className={styles.bio__image}
        src={logo}
        alt="Magomedrasul Magomedov"
      />

      <div className={styles.bio__text}>
        <div className={styles.bio__name}>
          {name.split("").map((char, index) => {
            if (index < displayedLength) {
              return (
                <span key={index} className={styles.char}>
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            }
            return null;
          })}
          <span className={styles.cursor} />
        </div>

        <div className={styles.bio__profession}>
          React / React Native developer
        </div>
      </div>
    </div>
  );
};

export default Bio;
