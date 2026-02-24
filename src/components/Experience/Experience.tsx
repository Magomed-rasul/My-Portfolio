import React from "react";
import styles from "./Experience.module.css";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

const experiences = [
  {
    date: "Сентябрь 2025 — Февраль 2026 (6 месяцев)",
    company: "StoryCraft",
    description: [
      "• С нуля спроектировал и реализовал архитектуру AI-продукта в условиях стартапа",
      "• Вывел проект от MVP до полноценного релиза: от прототипа с базовым функционалом до стабильного, масштабируемого приложения.",
      "• Принимал ключевые технологические решения по всему фронтенд-стеку, обеспечивая скорость разработки и качество кода.",
    ],
  },
  {
    date: "Март 2025 — Сентябрь 2025 (7 месяцев)",
    company: "Фриланс/Проектная работа",
    description: [
      "• Разработал с нуля и запустил клиентское приложение в формате Telegram Mini Apps (React + TypeScript) и обеспечил его работоспособность в среде мессенджера",
      "• Выполнил глубокий рефакторинг и оптимизацию мобильного, переписав приложения на Flutter: внедрил чистую архитектуру, повысил производительность и переработал ключевые модули.",
      "• Довёл проекты до рабочего состояния, готового к использованию клиентами, обеспечив полный цикл от разработки до деплоя.",
    ],
  },
  {
    date: "Июль 2023 — Март 2025 (1 год и 9 месяцев)",
    company: "CaspianTech",
    description: [
      "• Разработка и поддержка 4 проектов на React и React Native в рамках большой распределенной команды (10+ разработчиков).",
      "• Полный цикл разработки от получения ТЗ до запуска в production с использованием современного стека: TypeScript, Redux Toolkit / MobX, React Query, Webpack / Metro.",
      "• Успешно завершил и вывел в production 2 проекта, будучи единственным фронтенд-разработчиком (от архитектуры до реализации и деплоя).",
      "• Активное участие в процессах команды: код-ревью, планирование спринтов, рефакторинг легаси-кода.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experience__heading}>//опыт работы</div>
      {experiences.map((work, index) => (
        <ExperienceItem
          key={index}
          date={work.date}
          company={work.company}
          description={work.description}
        />
      ))}
    </div>
  );
};

export default Experience;