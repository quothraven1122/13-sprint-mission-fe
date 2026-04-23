import { useState } from "react";
import { Button, ProductCardList, Input } from "@/components";
import styles from "./MarketPage.module.css";
import { v4 as uuidv4 } from "uuid";

const dummyData = {
  title: "아이패드 미니 팝니다",
  price: 500000,
  like: 240,
};

export default function MarketPage() {
  const [input, setInput] = useState("");
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
      >
        <Input
          placeholder="검색할 상품을 입력해주세요"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button variant="rectangle">상품 등록하기</Button>
      </ProductCardList>
    </div>
  );
}
