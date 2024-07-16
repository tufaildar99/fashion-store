import React from "react";
import styles from "../styles/Portraits.module.css";
import { Img } from "./Img";

const Portraits = () => {
  return (
    <div className={styles["image-container"]}>
      <Img src={"images/woman.png"} className={styles.image} />
      <Img src={"images/man.png"} className={styles.image} />
      <Img src={"images/kid.png"} className={styles.image} />
    </div>
  );
};

export { Portraits };
