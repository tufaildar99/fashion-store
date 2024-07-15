import React from "react";
import { Img } from "../components/Img";
import { Text } from "../components/Text";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <header>
        <Img
          className={styles["logo-img"]}
          src={"images/logo.png"}
          alt={"logo-img"}
        />
        <div className={styles["header-actions"]}>
          <Text> Home</Text>
          <Text> Shop</Text>
          <Text> Men</Text>
          <Text> Women</Text>
          <Text> Accessories</Text>
          <Text> About Us</Text>
          <Text> Contact Us</Text>
          <Text> Blog</Text>
        </div>
        <div className={styles["header-icons"]}>
          <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>{" "}
          <i className={`fa-regular fa-heart ${styles.icon}`}></i>
          <i className={`fa-solid fa-cart-shopping ${styles.icon}`}></i>{" "}
          <i className={`fa-solid fa-user ${styles.icon}`}></i>
        </div>
      </header>
    </div>
  );
};

export { Header };
