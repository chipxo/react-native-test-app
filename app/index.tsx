import { RootState } from "@/redux/store";
import "@/utils/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  // useEffect(() => {
  //   const getLang = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem("lang");
  //       console.log(value);
  //       if (value !== null) {
  //         // We have data!!
  //       }
  //     } catch (error) {
  //       // Error retrieving data
  //     }
  //   };
  //   console.log(loggedIn);
  // }, []);

  if (!loggedIn) {
    return <Redirect href="welcome" />;
  }

  return <Redirect href="enterPinCode" />;
}
