import React from "react";
import { Img } from "../components/Img";
import { Text } from "../components/Text";
import styles from "../styles/FeaturedImage.module.css";

const FeaturedImage = ({
  src,
  newprice,
  originalprice,
  description,
  className,
}) => {
  return (
    <div className={`${styles["featured-image"]} ${className}`}>
      <div className={styles["image-container"]}>
        <Img src={src} className={styles["img"]} />
      </div>
      <div className={styles["text-container"]}>
        <Text as="h3" className={styles["text"]}>
          {description}
        </Text>
        <div className={styles["price-div"]}>
          <Text as="h3" className={styles["price"]}>
            {newprice}
          </Text>
          <div className="price-container">
            <Text as="h3" className={styles["price-original"]}>
              {originalprice}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FeaturedImage };
