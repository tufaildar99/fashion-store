import React from "react";
import { Text } from "../components/Text";
import styles from "../styles/Heading.module.css";

const Heading = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles["header-text"]}>
          <Text className={styles["main-text"]} as={"p"}>
            Sign up now and enjoy 25% discount on your first order.{" "}
            <span>Sign up now</span>
          </Text>
        </div>
        <div className={styles.btn}>❌</div>
      </header>
    </div>
  );
};

export { Heading };
