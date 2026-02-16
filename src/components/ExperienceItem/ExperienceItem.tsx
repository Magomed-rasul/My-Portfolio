import React from "react";
import styles from "./ExperienceItem.module.css";

interface ExperienceItemProps {
  date: string;
  company: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  date,
  company,
  description,
}) => {
  return (
    <div className={styles.experienceItem}>
      <div className={styles.experienceItem__date}>{date}</div>
      <div className={styles.experienceItem__text}>
        <div className={styles.experienceItem__company}>{company}</div>
        <div className={styles.experienceItem__description}>{description}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;
