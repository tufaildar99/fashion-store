import React from "react";
import styles from "../styles/BestSelling.module.css";
import { Img } from "./Img";
import { Text } from "./Text";
import { Button } from "./Button";

const BestSelling = () => {
  return (
    <div className={styles.bestSelling}>
      <Text as={"h3"} className={styles.textHeading}>
        Our Best Selling Products
      </Text>
      <div className={styles.btnContainer}>
        <Button type="button">All</Button>
        <Button type="button">Men</Button>
        <Button type="button">Women</Button>
        <Button type="button">Kids</Button>
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <Img src={"images/bestsellingwoman.png"} />
          </div>
          <div className={styles.productDetails}>
            <Text as={"h4"} className={styles.productTitle}>
              Trendy Graphic Tee
            </Text>
            <Text as={"h5"} className={styles.productBrand}>
              H&M
            </Text>
            <Text as={"h4"} className={styles.productPrice}>
              Rs 450
            </Text>
          </div>
        </div>

        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <Img src={"images/bestsellingwoman.png"} />
          </div>
          <div className={styles.productDetails}>
            <Text as={"h4"} className={styles.productTitle}>
              Trendy Graphic Tee
            </Text>
            <Text as={"h5"} className={styles.productBrand}>
              H&M
            </Text>
            <Text as={"h4"} className={styles.productPrice}>
              Rs 450
            </Text>
          </div>
        </div>

        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <Img src={"images/bestsellingwoman.png"} />
          </div>
          <div className={styles.productDetails}>
            <Text as={"h4"} className={styles.productTitle}>
              Trendy Graphic Tee
            </Text>
            <Text as={"h5"} className={styles.productBrand}>
              H&M
            </Text>
            <Text as={"h4"} className={styles.productPrice}>
              Rs 450
            </Text>
          </div>
        </div>

        <div className={styles.productCard}>
          <div className={styles.productImage}>
            <Img src={"images/bestsellingwoman.png"} />
          </div>
          <div className={styles.productDetails}>
            <Text as={"h4"} className={styles.productTitle}>
              Trendy Graphic Tee
            </Text>
            <Text as={"h5"} className={styles.productBrand}>
              H&M
            </Text>
            <Text as={"h4"} className={styles.productPrice}>
              Rs 450
            </Text>
          </div>
        </div>

        {/* Repeat the product cards for additional items */}
      </div>
    </div>
  );
};

export { BestSelling };
