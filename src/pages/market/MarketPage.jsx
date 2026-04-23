import React from "react";
import { ProductCardList } from "@/components";
import styles from "./MarketPage.module.css";
import { v4 as uuidv4 } from "uuid";

const dummyData = {
  title: "아이패드 미니 팝니다",
  price: 500000,
  like: 240,
};

export default function MarketPage() {
  return (
    <div className={styles.content}>
      <ProductCardList
        title="베스트 상품"
        column={4}
        data={Array.from({ length: 4 }).map((i) => dummyData)}
      />
      <ProductCardList
        title="판매 중인 상품"
        pagination={true}
        data={Array.from({ length: 10 }).map((i) => dummyData)}
      />
    </div>
  );
}
