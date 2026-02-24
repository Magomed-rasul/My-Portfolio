import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__block}>
        <div className={styles.header__title}>//portfolio</div>
        <a
          href="https://github.com/Magomed-rasul"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.header__text}
        >
          Portfolio
        </a>
      </div>

      <div className={styles.header__block}>
        <div className={styles.header__title}>//email</div>
        <a
          href="mailto:magomedovmrasull@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.header__text}
        >
          Email
        </a>
      </div>

      <div className={styles.header__block}>
        <div className={styles.header__title}>//github</div>
        <a
          href="https://github.com/Magomed-rasul"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.header__text}
        >
          GitHub
        </a>
      </div>

      <div className={styles.header__block}>
        <div className={styles.header__title}>//linkedIn</div>
        <a
          href="https://www.linkedin.com/in/magomedrasul-magomedov-6597b1365/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.header__text}
        >
          LinkedIn
        </a>
      </div>

      <div className={styles.header__block}>
        <div className={styles.header__title}>//tg</div>
        <a
          href="https://t.me/JhonyCatsvill"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.header__text}
        >
          Telegram
        </a>
      </div>
    </div>
  );
};

export default Header;