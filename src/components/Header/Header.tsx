import React from "react";
import styles from "./Header.module.css";


const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__block}>
        <div className={styles.header__title}>//portfilio</div>
        <div className={styles.header__text}>
          https://github.com/Magomed-rasul
        </div>
      </div>

      <div className={styles.header__block}>
        <div className={styles.header__title}>//email</div>
        <div className={styles.header__text}>magomedovmrasull@gmail.com</div>
      </div>

      <div className={styles.header__block}>
        <div className={styles.header__title}>//github</div>
        <div className={styles.header__text}>
          https://github.com/Magomed-rasul
        </div>
      </div>

      <div className={styles.header__block}>
        <div className={styles.header__title}>//linkedIn</div>
        <div className={styles.header__text}>
        https://www.linkedin.com/in/magomedrasul-magomedov-6597b1365/
        </div>
      </div>

      <div className={styles.header__block}>
        <div className={styles.header__title}>//tg</div>
        <div className={styles.header__text}>https://t.me/JhonyCatsvill</div>
      </div>
    </div>
  );
};

export default Header;
