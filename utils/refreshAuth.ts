import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";

export const refreshAuth = async (refreshToken: string): Promise<string> => {
  try {
    const { data }: AxiosResponse<{ accessToken: string }> =
      await axiosInstance.post("/refresh", {
        refreshToken,
        expiresInMins: 30,
      });

    return data.accessToken;
  } catch (error) {
    throw new Error("Failed to refresh token");
  }
};
