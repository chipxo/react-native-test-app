import { Stack } from "expo-router";
import * as SecureStore from "expo-secure-store";

const AuthLayout = () => {
  const storedPin = SecureStore.getItem("pin");

  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen
        name="signUp"
        options={{ headerShown: false, gestureEnabled: false }}
      />

      <Stack.Screen
        name="createPinCode"
        options={{ headerShown: false, gestureEnabled: false }}
      />

      <Stack.Screen
        name="enterPinCode"
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack>
  );
};

export default AuthLayout;
