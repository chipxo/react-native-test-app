import * as SecureStore from "expo-secure-store";

export const storeTokens = async (
  accessToken: string,
  refreshToken: string,
): Promise<void> => {
  await SecureStore.setItemAsync("accessToken", accessToken);
  await SecureStore.setItemAsync("refreshToken", refreshToken);
};
