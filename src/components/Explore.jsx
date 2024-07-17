import React from "react";
import { Text } from "./Text";
import { Img } from "./Img";
import styles from "../styles/Explore.module.css";
import { Button } from "./Button";

const Explore = ({ src, text1, text2, text3 }) => {
  return (
    <div className={styles.main}>
      <div className={styles.exploreCard}>
        <div className={styles.textSection}>
          <Text as={"h4"}>{text1}</Text>
          <Text as={"h2"}>{text2}</Text>
          <Text as={"h4"}>{text3}</Text>
          <Button type={"button"}>Shop Now</Button>
        </div>
        <div className={"styles.ImageSection"}>
          <Img src={src} />
        </div>
      </div>
    </div>
  );
};

export { Explore };
