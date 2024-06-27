import axios, { AxiosInstance } from "axios";

const baseURL = "https://dummyjson.com/auth";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// (async () => {
//   try {
//     // Retrieve tokens from secure storage
//     const { accessToken, refreshToken } = await getTokens();

//     // Set up axios-auth-refresh interceptor
//     const refreshAuthLogic = async (failedRequest: any) => {
//       try {
//         const newAccessToken = await refreshAuth(refreshToken);
//         failedRequest.response.config.headers["Authorization"] =
//           `Bearer ${newAccessToken}`;
//         await storeTokens(newAccessToken, refreshToken); // Store updated accessToken
//         return Promise.resolve();
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     };
//     axiosAuthRefresh(axiosInstance, refreshAuthLogic);

//     // Get current user details using the accessToken
//     const currentUser = await getCurrentUser(accessToken);
//     console.log("Current User:", currentUser);

//     // Simulate token expiration
//     // If you want to test token refresh, you can uncomment this timeout
//     setTimeout(async () => {
//       const refreshedCurrentUser = await getCurrentUser(accessToken);
//       console.log("Refreshed Current User:", refreshedCurrentUser);
//     }, 35000); // Assuming tokens expire in 30 seconds
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// })();
