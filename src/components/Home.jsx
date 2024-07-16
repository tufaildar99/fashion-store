import React from "react";
import styles from "../styles/Home.module.css";
import { Text } from "../components/Text";
import { Img } from "../components/Img";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <div className={styles["home-section"]}>
      <div className={styles["left-col"]}>
        <Text as={"h1"} className={styles["main-heading"]}>
          Step into Fashion at Your Ultimate Style Destination!
        </Text>
        <Text as={"p"} className={styles["text-desc"]}>
          Explore a World of Fashion Possibilities with Exclusive Discounts -
          Dive into Your Ultimate Style Destination and Elevate Your Wardrobe
          Today!
        </Text>
        <Button type={"button"} className={styles["shopping-button"]}>
          Shop Now <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </Button>
      </div>
      <div className={styles["right-col"]}>
        <Img src={"images/Home.png"} className={styles["section-image"]} />
      </div>
    </div>
  );
};

export { Home };
