import React from "react";
import { Heading } from "../components/Heading";
import { Header } from "../components/Header";
import { FeaturedImage } from "../components/FeaturedImage";
import styles from "../styles/Wishlist.module.css";
import { Newsletter } from "../components/Newsletter";

const Wishlist = () => {
  const products = [
    {
      id: 1,
      src: "images/featured-img.jpg",
      newprice: "Rs 750",
      originalprice: "Rs 1000",
      description: "Atleisure Performance Tee 1",
    },
    {
      id: 2,
      src: "images/featured-img.jpg",
      newprice: "Rs 750",
      originalprice: "Rs 1000",
      description: "Atleisure Performance Tee 2",
    },
    {
      id: 3,
      src: "images/featured-img.jpg",
      newprice: "Rs 750",
      originalprice: "Rs 1000",
      description: "Atleisure Performance Tee 3",
    },
    {
      id: 4,
      src: "images/featured-img.jpg",
      newprice: "Rs 750",
      originalprice: "Rs 1000",
      description: "Atleisure Performance Tee 4",
    },
    {
      id: 5,
      src: "images/featured-img.jpg",
      newprice: "Rs 750",
      originalprice: "Rs 1000",
      description: "Atleisure Performance Tee 5",
    },
    {
      id: 6,
      src: "images/featured-img.jpg",
      newprice: "Rs 750",
      originalprice: "Rs 1000",
      description: "Atleisure Performance Tee 6",
    },
  ];

  return (
    <div>
      <Heading />
      <Header />
      <div className={styles["featured-images-grid"]}>
        {products.map((product) => (
          <FeaturedImage
            key={product.id}
            src={product.src}
            newprice={product.newprice}
            originalprice={product.originalprice}
            description={product.description}
          />
        ))}
      </div>
      <Newsletter />
    </div>
  );
};

export { Wishlist };
