import React from "react";
import styles from "../styles/ProductDetailsOne.module.css";

const ProductDetailsOne = () => {
  return (
    <>
      <div className={styles.productDetailsMain}>
        <div className={styles.clickableImagesColomn}>
          <img src="images/p1.jpg" alt="product-img" />
          <img src="images/p1.jpg" alt="product-img" />
          <img src="images/p1.jpg" alt="product-img" />
          <img src="images/p1.jpg" alt="product-img" />
        </div>
        <div className={styles.selectedImage}>
          <img src="images/pro1.jpg" alt="product-img" />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productText}>
            <h2>Trendy Black T-shirt</h2>
            <p>
              Stay stylish and warm in our Trendy Black Jacket, crafted with
              high- quality materials to ensure lasting comfort and durability.
            </p>
          </div>
          <div className={styles.priceDetails}>
            <h3 className={styles.newPrice}>Rs 540</h3>
            <h3 className={styles.strikenPrice}>Rs 1299</h3>
          </div>
          <div className={styles.sizeDetails}>
            <h4>Select Size</h4>
            <div className={styles.sizeButtonsCircular}>
              <button>SX</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className={styles.Buttons}>
            <button className={styles.CartButton}>Add to Cart</button>
            <button className={styles.WishListButton}>Add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductDetailsOne };
