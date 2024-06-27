import { User } from "@/redux/user/userSlice";
import { axiosInstance } from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";

type UserLogin = {
  name: string;
  password: string;
};

export const useAuth = async ({ name, password }: UserLogin): Promise<User> => {
  try {
    const { data }: AxiosResponse<User> = await axiosInstance.post("/login", {
      username: name,
      password: password,
      expiresInMins: 30,
    });

    return data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};
