import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { StatusBar } from "expo-status-bar";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, useAppDispatch } from "@/redux/store";
import { Provider } from "react-redux";
import { asyncStoragePersister, queryClient } from "@/utils/queryClient";
import { rootScreens } from "@/constants/rootScreens";
import "@/global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [color, setColor] = useState<"dark" | "light">("dark");
  const pathname = usePathname();
  const [loaded] = useFonts({
    Inter: require("../assets/fonts/Inter.ttf"),
  });

  const curPath = pathname.split("/").at(-1);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

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
            {rootScreens.map(({ id, name, options }) => (
              <Stack.Screen key={id} name={name} options={options} />
            ))}
          </Stack>
        </PersistQueryClientProvider>
      </PersistGate>
    </Provider>
  );
}