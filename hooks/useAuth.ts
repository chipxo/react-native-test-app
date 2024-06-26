import axios from "axios";
import { z } from "zod";

type User = {
  name: string;
  password: string;
};

export const useAuth = async ({ name, password }: User) => {
  const url = "https://dummyjson.com/auth/login";
  const user = {
    username: name,
    password: password,
  };
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(url, user, headers);
    console.log(data);

    return data;
  } catch (e) {
    console.error("Error in:", e);
  }
};
