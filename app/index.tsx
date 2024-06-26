import { RootState } from "@/redux/store";
import "@/utils/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";
import i18n from "@/utils/i18n";

export default function HomeScreen() {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const { lan } = useSelector((state: RootState) => state.lang);

  useEffect(() => {
    i18n.changeLanguage(lan);
  }, [lan]);

  const storedPin = SecureStore.getItem("pin");

  if (!loggedIn) {
    return <Redirect href="welcome" />;
  }

  if (loggedIn && !storedPin) {
    return <Redirect href="createPinCode" />;
  }

  if (loggedIn) {
    return <Redirect href="enterPinCode" />;
  }
}
