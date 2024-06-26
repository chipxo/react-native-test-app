import axios from "axios";

export const useFetch = async (query: string) => {
  const url = `https://jsonplaceholder.typicode.com/posts${query}`;

  const { data } = await axios.get(url);
  console.log(data);

  return data;
};
