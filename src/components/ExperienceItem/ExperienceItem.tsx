import React from "react";
import styles from "./ExperienceItem.module.css";

interface ExperienceItemProps {
  date: string;
  company: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  date,
  company,
  description,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.date}>{date}</div>

      <div className={styles.content}>
        <div className={styles.company}>{company}</div>

        <div className={styles.descriptionContainer}>
          {description.map((item, index) => (
            <p key={index} className={styles.description}>{item}</p>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ExperienceItem;