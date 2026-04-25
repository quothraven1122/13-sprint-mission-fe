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
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState(constant[0]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ list: [] });
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
        keyword,
      });
      setData(products);
    };
    getProductGet();
  }, [token, page, selected, keyword]);

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
      <ProductCardList title="판매 중인 상품" data={data.list}>
        <Input
          placeholder="검색할 상품을 입력해주세요"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (e.target.value.length === 0) {
              setPage(1);
              setKeyword(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setPage(1);
              setKeyword(input);
            }
          }}
          className={styles.input}
        />
        <Dropdown
          menu={constant}
          value={selected}
          onChange={(s) => {
            setSelected(s);
            setPage(1);
          }}
        />
        <Button variant="rectangle">상품 등록하기</Button>
      </ProductCardList>
      <Pagination
        currentPage={page}
        totalCount={data.totalCount}
        onChange={setPage}
      />
    </div>
  );
}
