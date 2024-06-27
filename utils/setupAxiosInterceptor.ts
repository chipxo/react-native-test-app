import { axiosInstance } from "./axiosInstance";
import { getTokens } from "./getTokens";
import { refreshAuth } from "./refreshAuth";
import { storeTokens } from "./storeTokens";
import axiosAuthRefresh from "axios-auth-refresh";

export const setupAxiosInterceptor = async () => {
  try {
    const { accessToken, refreshToken } = await getTokens();

    const refreshAuthLogic = async (failedRequest: any) => {
      try {
        const newAccessToken = await refreshAuth(refreshToken);

        failedRequest.response.config.headers["Authorization"] =
          `Bearer ${newAccessToken}`;
        await storeTokens(newAccessToken, refreshToken);

        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    };

    axiosAuthRefresh(axiosInstance, refreshAuthLogic);
  } catch (error) {
    console.error("Failed to setup Axios interceptor: ", error);
  }
};
