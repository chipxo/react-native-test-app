import axios from "axios";

export const useFetch = async (query: string) => {
  const url = `https://jsonplaceholder.typicode.com/posts${query}`;

  const res = await axios.get(url);

  return res.data;
};
