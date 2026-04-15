export const BASE_URL = "https://panda-market-api-crud.vercel.app";
export default async function request(method = "GET", url, body, options = {}) {
  try {
    //1. fetch의 config와 필요하다면 body 세팅하기
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };
    if (method !== "GET" && body) {
      //GET일 경우 body를 추가하지 않도록 함
      config.body = JSON.stringify(body);
    }

    //2. fetch로 요청하기
    const result = await fetch(`${BASE_URL}${url}`, config);
    const data = await result.json();

    //3. 에러 처리하기
    if (!result.ok) {
      //응답 상태 코드가 2XX 아닐시
      throw new Error(data?.message || "Request Failed");
    }
    return data;
  } catch (e) {
    console.error(e);
  }
}
