import * as SecureStore from "expo-secure-store";

export const getTokens = async (): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  const accessToken = await SecureStore.getItemAsync("accessToken");
  const refreshToken = await SecureStore.getItemAsync("refreshToken");
  if (!accessToken || !refreshToken) {
    throw new Error("Tokens not found");
  }

  return { accessToken, refreshToken };
};
