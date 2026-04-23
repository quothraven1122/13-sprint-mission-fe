import React from "react";
import { icHeartEmpty } from "@/assets/icons";
import thrush from "./thrush8.jpg";
import styles from "./Item.module.css";

export default function Item({ data }) {
  return (
    <div className={styles.container}>
      <img src={thrush} className={styles.img} />
      <div className={styles.content}>
        <h2 className={styles.title}>{data.title}</h2>
        <h3 className={styles.price}>{data.price.toLocaleString()}원</h3>
        <div className={styles.meta}>
          <img src={icHeartEmpty} />
          {data.like}
        </div>
      </div>
    </div>
  );
}
