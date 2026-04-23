import React from "react";
import { icHeartEmpty } from "@/assets/icons";
import thrush from "./thrush8.jpg";
import styles from "./Item.module.css";

export default function Item() {
  return (
    <div className={styles.container}>
      <img src={thrush} className={styles.img} />
      <div className={styles.content}>
        <h2 className={styles.title}>아이패드 미니 팝니다</h2>
        <h3 className={styles.price}>{(500000).toLocaleString()}원</h3>
        <div className={styles.meta}>
          <img src={icHeartEmpty} />
          {240}
        </div>
      </div>
    </div>
  );
}
