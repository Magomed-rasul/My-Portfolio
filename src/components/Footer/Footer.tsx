import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__copyright}>© 2025</div>
      <nav className={styles.footer__nav}>
        <a
          href="https://github.com/Magomed-rasul"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          Portfolio
        </a>
        <span className={styles.footer__separator}>/</span>
        <a
          href="mailto:magomedovmrasull@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          Email
        </a>
        <span className={styles.footer__separator}>/</span>
        <a
          href="https://github.com/Magomed-rasul"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          GitHub
        </a>
        <span className={styles.footer__separator}>/</span>
        <a
          href="https://www.linkedin.com/in/magomedrasul-magomedov-6597b1365/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          LinkedIn
        </a>
        <span className={styles.footer__separator}>/</span>
        <a
          href="https://t.me/JhonyCatsvill"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          Telegram
        </a>
      </nav>
    </footer>
  );
};

export default Footer;