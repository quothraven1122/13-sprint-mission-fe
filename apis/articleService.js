import request from "./main.js";
const ARTICLE_URL = "/articles";

document.querySelector("#test").addEventListener("click", async () => {
  //테스트할 함수 넣기
  const result = await deleteArticle(5965);
  console.log(result);
});

export const getArticleList = async (page, pageSize, keyword) => {
  const queryParam = new URLSearchParams({
    page,
    pageSize,
    keyword,
  });
  return await request("GET", `${ARTICLE_URL}?${queryParam}`);
};
export const getArticle = async (articleId) => {
  return await request("GET", `${ARTICLE_URL}/${articleId}`);
};
export const createArticle = async (body) => {
  return await request("POST", `${ARTICLE_URL}`, body);
};
export const patchArticle = async (articleId, body) => {
  return await request("PATCH", `${ARTICLE_URL}/${articleId}`, body);
};
export const deleteArticle = async (articleId) => {
  return await request("DELETE", `${ARTICLE_URL}/${articleId}`);
};
