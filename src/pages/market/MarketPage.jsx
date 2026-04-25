import { useState, useEffect } from "react";
import {
  Button,
  Dropdown,
  ProductCardList,
  Input,
  Pagination,
} from "@/components";
import { signIn, getProduct } from "@/apis";
import constant from "../../components/Dropdown/constant";
import styles from "./MarketPage.module.css";

export default function MarketPage() {
  const [best, setBest] = useState([]);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(constant[0]);
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState([]);
  const [token, setToken] = useState(null);

  //로그인 페이지 생성 전까지 사용할 임시 로그인 로직
  useEffect(() => {
    const signInPost = async () => {
      const user = await signIn("example@email.com", "password");
      localStorage.setItem("accessToken", user.accessToken);
      setToken(user.accessToken);
    };
    signInPost();
  }, []);

  //Product 받기
  useEffect(() => {
    if (!token) return;
    const getProductGet = async () => {
      const products = await getProduct({
        page,
        orderBy: selected.type,
        keyword: input,
      });
      setProduct(products.list);
    };
    getProductGet();
  }, [token, page, selected, input]);

  //Best 받기
  useEffect(() => {
    if (!token) return;
    const getProductGet = async () => {
      const products = await getProduct({
        page,
        orderBy: "favorite",
      });
      setBest(products.list.slice(0, 4));
    };
    getProductGet();
  }, [token]);

  return (
    <div className={styles.content}>
      <ProductCardList title="베스트 상품" column={4} data={best} />
      <ProductCardList title="판매 중인 상품" data={product}>
        <Input
          placeholder="검색할 상품을 입력해주세요"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className={styles.input}
        />
        <Dropdown menu={constant} value={selected} onChange={setSelected} />
        <Button variant="rectangle">상품 등록하기</Button>
      </ProductCardList>
      <Pagination currentPage={page} totalPages={5} onChange={setPage} />
    </div>
  );
}
