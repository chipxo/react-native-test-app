import React from "react";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AuthLayout = () => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  // if (loggedIn) {
  //   return (
  //     <Stack>
  //       <Stack.Screen name="enterPinCode" options={{ headerShown: false }} />
  //     </Stack>
  //   );
  // }

  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
      <Stack.Screen name="createPinCode" options={{ headerShown: false }} />
      <Stack.Screen name="enterPinCode" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
