import { Pressable } from "react-native";
import { Colors } from "./Colors";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useRouter } from "expo-router";

export const rootScreens = [
  {
    id: 1,
    name: "index",
    options: { headerShown: false },
  },
  {
    id: 2,
    name: "welcome/index",
    options: { headerShown: false },
  },
  {
    id: 3,
    name: "(auth)",
    options: { headerShown: false },
  },
  {
    id: 4,
    name: "home/(tabs)",
    options: { headerShown: false, gestureEnabled: false },
  },
  {
    id: 5,
    name: "home/language",
    options: { headerShown: false },
  },
  {
    id: 6,
    name: "home/[id]",
    options: {
      headerShown: true,
      headerTitle: "",
      headerBackTitleVisible: false,
      headerTintColor: Colors.backBtn,
      // headerLeft: () => {
      //   const router = useRouter();

      //   return (
      //     <Pressable onPress={() => router.navigate("home")} className="">
      //       <Ionicons name="chevron-back" size={24} color={Colors.backBtn} />
      //     </Pressable>
      //   );
      // },
    },
  },
];
