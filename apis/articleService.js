import request from "./main.js";
const ARTICLE_ENDPOINT = "/articles";

export const getArticleList = async (page, pageSize, keyword) => {
  const queryParam = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });
  return await request("GET", `${ARTICLE_ENDPOINT}?${queryParam}`);
};
export const getArticle = async (articleId) => {
  return await request("GET", `${ARTICLE_ENDPOINT}/${articleId}`);
};
export const createArticle = async (body) => {
  return await request("POST", `${ARTICLE_ENDPOINT}`, body);
};
export const patchArticle = async (articleId, body) => {
  return await request("PATCH", `${ARTICLE_ENDPOINT}/${articleId}`, body);
};
export const deleteArticle = async (articleId) => {
  return await request("DELETE", `${ARTICLE_ENDPOINT}/${articleId}`);
};
