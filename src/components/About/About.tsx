import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__heading}>//О себе</div>
      <div className={styles.about__text}>
        Frontend-разработчик с опытом работы 2,5 года в создании веб- и
        мобильных приложений. Специализируюсь на экосистеме React (React, React
        Native, TypeScript). Имею успешный опыт работы как в составе
        распределенной команды из 10+ разработчиков, так и в роли единственного
        фронтенд-специалиста на проекте, где отвечал за архитектуру и полный
        цикл разработки — от прототипа до production. Участвовал в запуске
        AI-стартапа (от MVP до релиза), занимался рефакторингом и оптимизацией
        приложений, внедрял чистую
      </div>
    </div>
  );
};

export default About;
