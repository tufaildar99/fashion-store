import React from "react";

import { Header } from "../components/Header";
import { Heading } from "../components/Heading";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Features } from "../components/Features";
import { Portraits } from "../components/Portraits";

const Homepage = () => {
  return (
    <div>
      <Heading />
      <Header />
      <Home />
      <Features />
      <Portraits />
      <Newsletter />
      <Footer />
    </div>
  );
};

export { Homepage };
