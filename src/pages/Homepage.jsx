import React from "react";

import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Features } from "../components/Features";
import { Portraits } from "../components/Portraits";
import { BestSelling } from "../components/BestSelling";
import { Explore } from "../components/Explore";
import styles from "../styles/Homepage.module.css";

const Homepage = () => {
  return (
    <div>
      <Heading />
      <Header />
      <Home />
      <Features />
      <Portraits />
      <BestSelling />
      <div className={styles.explorer}>
        <Explore
          src={"images/expman.png"}
          text1={"Flat 20% Discount"}
          text2={"Explore the Latest in Men's Fashion"}
          text3={"Step into Style Unveiling the Newest Trends"}
        />
        <Explore
          src={"images/expwomen.png"}
          text1={"Flat 25% Discount"}
          text2={"Explore the Latest in Women's Fashion"}
          text3={"Elevate Your Wardrobe with Trendsetting Styles"}
        />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export { Homepage };
