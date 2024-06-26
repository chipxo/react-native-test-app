import { useFonts } from "expo-font";
import { Stack, useFocusEffect, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import "@/global.css";
import { Pressable, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [color, setColor] = useState<"dark" | "light">("dark");

  const router = useRouter();

  const pathname = usePathname();
  const curPath = pathname.split("/").at(-1);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, // Optional: Set stale time for queries
      },
    },
  });

  const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
  });

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useFocusEffect(() => {
    // if (loaded) {
    //   router.push("(auth)/enterPinCode");
    // }
    // if (loaded) router.push("/");
  });

  useEffect(() => {
    if (curPath === "home") {
      setColor("light");
    } else {
      setColor("dark");
    }
  }, [curPath]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{ persister: asyncStoragePersister }}
        >
          <StatusBar style={color} />
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="welcome/index"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/signIn"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/signUp"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(auth)/enterPinCode"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="home/(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="home/language"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="home/[id]"
              options={{
                headerShown: true,
                headerTitle: "",
                headerBackTitleVisible: false,
                headerTintColor: Colors.backBtn,
                headerLeft: () => (
                  <Pressable
                    onPress={() => router.navigate("home")}
                    className="-translate-x-2"
                  >
                    <Ionicons
                      name="chevron-back"
                      size={24}
                      color={Colors.backBtn}
                    />
                  </Pressable>
                ),
              }}
              getId={({ params }) => String(Date.now())}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
        </PersistQueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
