import React, { useRef } from "react";
import ExampleCase from "../ExampleCase/ExampleCase";
import styles from "./Example.module.css";

import karkas from "../../assets/image/Karkas.png";

const Example: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      // ширина карточки 442px + gap 24px = 466px
      scrollRef.current.scrollBy({ left: -466, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 466, behavior: "smooth" });
    }
  };

  const items = [
    {
      type: "web",
      image: karkas,
      title: "Каркас Модуль",
      desc: "Веб-сайт, в котором можно ознакомиться с продукцией ЛСТК и оформить заказ в пару кликов.",
    },
    {
      type: "mobile",
      image: karkas,
      title: "SmartEat",
      desc: "Приложение, помогающее своим пользователям детально следить за своим питанием.",
    },
    {
      type: "web",
      image: karkas,
      title: "Федерация Бокса России",
      desc: "Официальный сайт федерации с актуальной информацией о турнирах, новостях и спортсменах.",
    },
    {
      type: "mobile",
      image: karkas,
      title: "Суши Мастер",
      desc: "Мобильное приложение для быстрого заказа суши, роллов и пиццы с доставкой по Мариуполю.",
    },
    {
      type: "web",
      image: karkas,
      title: "Caspian Tech",
      desc: "Корпоративный сайт IT-компании, где можно заказать разработку сайта или мобильного приложения.",
    },
    {
      type: "mobile",
      image: karkas,
      title: "Rayson",
      desc: "Приложение для выбора и заказа модной одежды с доставкой по всей России.",
    },
    {
      type: "web",
      image: karkas,
      title: "Story Craft",
      desc: "Стартап-платформа для генерации видео по текстовому запросу с помощью искусственного интеллекта.",
    },
    {
      type: "mobile",
      image: karkas,
      title: "TG Mini App",
      desc: "Конструктор для бизнеса в виде мини-приложения внутри Telegram, помогающий автоматизировать продажи.",
    },
  ];

  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>//Примеры</div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={scrollLeft}>
            {/* Стрелка влево (чёрная) */}
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10.5915L10.59 0L13.773 3.183L6.363 10.5915L13.773 18L10.59 21.183L0 10.5915Z" fill="black"/>
            </svg>
          </button>
          <button className={styles.button} onClick={scrollRight}>
            {/* Стрелка вправо (чёрная) */}
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 10.5915L3.41 0L0.227 3.183L7.637 10.5915L0.227 18L3.41 21.183L14 10.5915Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.scrollContainer} ref={scrollRef}>
        {items.map((item, index) => (
          <ExampleCase key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Example;