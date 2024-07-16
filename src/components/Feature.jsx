import React from "react";
import styles from "../styles/Feature.module.css";
import { Text } from "../components/Text";

const Feature = ({ children, clas, heading }) => {
  return (
    <div className={styles["feature-component"]}>
      <div className={styles.icon}>
        <i class={clas}></i>
      </div>
      <div className={styles.content}>
        <Text as={"h4"} className={styles["heading-text"]}>
          {heading}
        </Text>
        <Text as={"p"} className={styles["heading-text"]}>
          {children}
        </Text>
      </div>
    </div>
  );
};

export { Feature };
