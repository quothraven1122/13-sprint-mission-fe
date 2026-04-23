import React from "react";
import styles from "./MarketPage.module.css";
import Item from "../../components/Item/Item";

export default function MarketPage() {
  return (
    <div className={styles.page}>
      <Item />
    </div>
  );
}
