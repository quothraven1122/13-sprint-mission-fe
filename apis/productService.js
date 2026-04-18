import request from "./main.js";
const PRODUCT_ENDPOINT = "/products";

export const getProductList = async (page, pageSize, keyword) => {
  const queryParam = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });
  return await request("GET", `${PRODUCT_ENDPOINT}?${queryParam}`);
};
export const getProduct = async (productId) => {
  return await request("GET", `${PRODUCT_ENDPOINT}/${productId}`);
};
export const createProduct = async (body) => {
  return await request("POST", `${PRODUCT_ENDPOINT}`, body);
};
export const patchProduct = async (productId, body) => {
  return await request("PATCH", `${PRODUCT_ENDPOINT}/${productId}`, body);
};
export const deleteProduct = async (productId) => {
  return await request("DELETE", `${PRODUCT_ENDPOINT}/${productId}`);
};
