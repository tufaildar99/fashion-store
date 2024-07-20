import React from "react";
import { Button } from "./Button";
import styles from "../styles/ProductDetailsTwo.module.css";

const ProductDetailsTwo = () => {
  return (
    <div className={styles.additionalDetails}>
      <div className={styles.tabListMain}>
        <div className={styles.tabList}>
          <div className={styles.DescriptionButton}>
            <button>Description</button>
          </div>
          <div className={styles.InfoButton}>
            <button>Additional Information</button>
          </div>
          <div className={styles.ReviewButton}>
            <button>Reviews</button>
          </div>
        </div>
      </div>
      <div className={styles.detailsText}>
        <p>
          Elevate your casual look with our Classic Denim Jacket. Made from
          premium denim fabric, this jacket offers both style and comfort.
          Featuring timeless design elements such as button closures and chest
          pockets, it's perfect for layering over any outfit.
        </p>
        <p>
          Stay stylish and warm in our Trendy Black Jacket, crafted with
          high-quality materials to ensure lasting comfort and durability. Its
          versatile design makes it suitable for various occasions, whether
          you're heading out for a casual outing with friends or a night on the
          town. The sleek black color adds a touch of sophistication to any
          outfit, making it a timeless addition to your wardrobe. With multiple
          pockets for added convenience, you can keep your essentials close at
          hand wherever you go. Elevate your style effortlessly with this chic
          and fashionable jacket that combines comfort, functionality, and
          trendiness in one versatile piece.
        </p>
      </div>
      <div className={styles.productImages}>
        <div className={styles.leftImage}>
          <img src={"../images/i1.jpg"} />
        </div>
        <div className={styles.rightImage}>
          <img src={"../images/i1.jpg"} />
          <img src={"../images/i1.jpg"} />
          <img src={"../images/i1.jpg"} />
          <img src={"../images/i1.jpg"} />
        </div>
      </div>
    </div>
  );
};

export { ProductDetailsTwo };
