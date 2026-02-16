import React from "react";
import styles from "./Experience.module.css";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

const experiences = [
  {
    date: "jan 2022 - present",
    company: "Babbangona //software engineer",
    description: `developed a multilingual customer support module (3 languages) with auto-sync features, furnishing users with realtime information.
supervised data collection (23,000+ entries) and analysis of products across 5 states.`,
  },
];

const Experience: React.FC = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experience__heading}>//опыт работы</div>
      {experiences.map((work) => (
        <ExperienceItem
          date={work.date}
          company={work.company}
          description={work.description}
        />
      ))}
    </div>
  );
};

export default Experience;
