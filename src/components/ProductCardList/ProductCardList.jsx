import React from "react";
import { Item } from "@/components";
import styles from "./ProductCardList.module.css";

export default function ProductCardList({ title, column, data, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.toolbar}>{children}</div>
      </div>
      <div
        className={styles.list}
        style={{
          "--col-desktop": column?.desktop,
          "--col-tablet": column?.tablet,
          "--col-mobile": column?.mobile,
        }}
      >
        {data.map((d) => (
          <Item data={d} key={d.id} />
        ))}
      </div>
    </div>
  );
}
