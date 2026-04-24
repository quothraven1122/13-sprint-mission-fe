import React from "react";
import { Item } from "@/components";
import styles from "./ProductCardList.module.css";

export default function ProductCardList({ title, column = 5, data, children }) {
  return (
    <div>
      <div className={styles.top}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.toolbar}>{children}</div>
      </div>
      <div className={styles.list} style={{ "--column-count": column }}>
        {data.map((d, i) => (
          <Item data={d} key={i} />
        ))}
      </div>
    </div>
  );
}
