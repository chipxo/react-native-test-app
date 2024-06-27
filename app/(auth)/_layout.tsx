import { Stack } from "expo-router";

const AuthLayout = () => {
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
