import request from "./main.js";
const PRODUCT_URL = "/products";

document.querySelector("#test").addEventListener("click", async () => {
  //테스트할 함수 넣기
  const result = await getProduct(3393);
  console.log(result); //3393
});

export const getProductList = async (page, pageSize, keyword) => {
  const queryParam = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });
  return await request("GET", `${PRODUCT_URL}?${queryParam}`);
};
export const getProduct = async (productId) => {
  return await request("GET", `${PRODUCT_URL}/${productId}`);
};
export const createProduct = async (body) => {
  return await request("POST", `${PRODUCT_URL}`, body);
};
export const patchProduct = async (productId, body) => {
  return await request("PATCH", `${PRODUCT_URL}/${productId}`, body);
};
export const deleteProduct = async (productId) => {
  return await request("DELETE", `${PRODUCT_URL}/${productId}`);
};
