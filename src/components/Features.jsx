import React from "react";
import styles from "../styles/Features.module.css";
import { Feature } from "./Feature";

const Features = () => {
  return (
    <div className={styles["features-section"]}>
      <Feature clas={"fa-solid fa-truck-fast"} heading={"Free Shipping"}>
        Free Shipping on orders above Rs 499
      </Feature>
      <Feature clas={"fa-solid fa-dollar-sign"} heading={"Flexible Payment"}>
        Multiple Secure Payment Options
      </Feature>
      <Feature clas={"fa-solid fa-globe"} heading={"24/7 Support"}>
        We support Online all days
      </Feature>
    </div>
  );
};

export { Features };
