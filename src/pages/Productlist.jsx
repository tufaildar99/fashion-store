import React from "react";
import { Text } from "../components/Text";
import { Filter } from "../components/Filter";
import { Header } from "../components/Header";
import { Product } from "../components/Product";
import styles from "../styles/Productlist.module.css";

const Products = [
  {
    src: "images/product1.jpg",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.jpg",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.jpg",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.jpg",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.jpg",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.jpg",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.jpg",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
  },
  {
    src: "images/product1.jpg",
    brand: "H&M",
    price: 499,
    title: "Black Solid Tee",
    oldPrice: 999,
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
          <Filter />
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
    </>
  );
};

export { Productlist };
