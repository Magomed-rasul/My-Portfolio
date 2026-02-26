import React, { useRef } from "react";
import ExampleCase from "../ExampleCase/ExampleCase";
import styles from "./Example.module.css";

import karkas from "../../assets/image/Karkas.png";
import sushi from "../../assets/image/sushi.png";
import smart from "../../assets/image/smart.png";
import rayson from "../../assets/image/rayson.png";
import casp from "../../assets/image/casp.png";
import box from "../../assets/image/box.png";
import app from "../../assets/image/app.png";
import story from "../../assets/image/story.png";

const Example: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Функция для определения ширины карточки + gap
  const getScrollStep = (): number => {
    if (scrollRef.current) {
      // Ищем первый элемент с data-testid="example-case"
      const firstCard = scrollRef.current.querySelector('[data-testid="example-case"]') as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const gap = parseInt(getComputedStyle(scrollRef.current).gap) || 24;
        return cardWidth + gap;
      }
    }
    return 466; // fallback (442px карточка + 24px gap)
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: getScrollStep(), behavior: "smooth" });
    }
  };

  const items = [
    {
      type: "web" as const,
      image: karkas,
      title: "Каркас Модуль",
      desc: "Веб-сайт, в котором можно ознакомиться с продукцией ЛСТК и оформить заказ в пару кликов.",
    },
    {
      type: "mobile" as const,
      image: smart,
      title: "SmartEat",
      desc: "Приложение, помогающее своим пользователям детально следить за своим питанием.",
    },
    {
      type: "web" as const,
      image: box,
      title: "Федерация Бокса России",
      desc: "Официальный сайт федерации с актуальной информацией о турнирах, новостях и спортсменах.",
    },
    {
      type: "mobile" as const,
      image: sushi,
      title: "Суши Мастер",
      desc: "Мобильное приложение для быстрого заказа суши, роллов и пиццы с доставкой по Мариуполю.",
    },
    {
      type: "web" as const,
      image: casp,
      title: "Caspian Tech",
      desc: "Корпоративный сайт IT-компании, где можно заказать разработку сайта или мобильного приложения.",
    },
    {
      type: "mobile" as const,
      image: rayson,
      title: "Rayson",
      desc: "Приложение для выбора и заказа модной одежды с доставкой по всей России.",
    },
    {
      type: "web" as const,
      image: story,
      title: "Story Craft",
      desc: "Стартап-платформа для генерации видео по текстовому запросу с помощью искусственного интеллекта.",
    },
    {
      type: "mobile" as const,
      image: app,
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
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10.5915L10.59 0L13.773 3.183L6.363 10.5915L13.773 18L10.59 21.183L0 10.5915Z" fill="black"/>
            </svg>
          </button>
          <button className={styles.button} onClick={scrollRight}>
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