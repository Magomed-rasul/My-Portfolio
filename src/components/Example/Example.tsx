import React from "react";
import styles from "./Example.module.css";
import ExampleCase from "../ExampleCase/ExampleCase";

interface ExampleProps {
  images:[];
}

const Example: React.FC<ExampleProps> = () => {
  return (
    <div className={styles.Example}>
      <div className={styles.Example__title}>
        <ExampleCase type={"mobile"} image={undefined} />
      </div>
    </div>
  );
};

export default Example;
