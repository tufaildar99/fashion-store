import React from "react";
import { Text } from "../components/Text";
import { Filter } from "../components/Filter";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import { PageNum } from "../components/PageNum";
import { NewsAndBlog } from "../components/NewsAndBlog";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

import styles from "../styles/Productlist.module.css";

const Products = [
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.png",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
];

const Filters = [
  {
    name: "Brands",
    labels: ["Zara", "Puma", "Adidas", "Nike", "H&M"],
  },
  {
    name: "Price Range",
    labels: ["100 - 300", "300-500", "500-1000", "1000-2000", "2000-2500"],
  },
  {
    name: "Condition",
    labels: ["Zara", "Puma", "Adidas", "Nike", "H&M"],
  },
  {
    name: "Ratings",
    labels: ["Zara", "Puma", "Adidas", "Nike", "H&M"],
  },
];

const Productlist = () => {
  return (
    <>
      <Header />
      <div className={styles.Productlist}>
        <div className={styles.filterSection}>
          <div className={styles.filters}>
            <Text as="h3" /> Filters <Text />
          </div>

          {Filters.map((item, index) => (
            <Filter key={index} item={item} />
          ))}
        </div>
        <div className={styles.productsSection}>
          {Products.map((product, index) => (
            <Product
              key={index}
              src={product.src}
              brand={product.brand}
              price={product.price}
              title={product.title}
              oldPrice={product.oldPrice}
            />
          ))}
        </div>
      </div>
      <div className={styles.numbering}>
        <PageNum />
      </div>
      <NewsAndBlog />
      <Newsletter />
      <Footer />
    </>
  );
};

export { Productlist };
