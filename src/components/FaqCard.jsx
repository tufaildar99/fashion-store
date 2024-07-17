import React from "react";
import styles from "../styles/FaqCard.module.css";
import { Text } from "./Text";
import { Button } from "./Button";

const FaqCard = () => {
  return (
    <div className={styles.faqCard}>
      <div className={styles.question}>
        <Text as="header">How long does shipping take</Text>

        <i class="fas fa-chevron-circle-up"></i>
      </div>

      <div className={styles.answer}>
        <Text as="p">
          Our standard shipping typically takes 3-5 business days within the
          contiguous United States. International shipping times may vary based
          on the destination country and customs processing times. We also offer
          expedited shipping options for customers who need their orders to
          arrive more quickly.
        </Text>
      </div>
    </div>
  );
};

export { FaqCard };
