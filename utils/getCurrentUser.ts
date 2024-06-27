import { User } from "@/redux/user/userSlice";
import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";

export const getCurrentUser = async (accessToken: string): Promise<User> => {
  try {
    const { data }: AxiosResponse<User> = await axiosInstance.get("/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error("Failed to get current user");
  }
};
