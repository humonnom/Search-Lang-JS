const END_POINT =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

const fetchData = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    // return await res.json();
    return ["a", "b", "c"];
  }
};

export const getData = async (keyword) => {
  return fetchData(`${END_POINT}/languages?keyword=${keyword}`);
};
