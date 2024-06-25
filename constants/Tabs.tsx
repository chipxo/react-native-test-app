import { resources } from "@/utils/i18n";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Colors } from "./Colors";
import { Entypo } from "@expo/vector-icons";
import { ScreenProps } from "expo-router/build/useScreens";
import { Pressable } from "react-native";

type TranslationKeys =
  | keyof (typeof resources)["en"]["translation"]
  | keyof (typeof resources)["ar"]["translation"];

type TTab = ScreenProps & {
  id: number;
  // name: string;
  options: {
    title: TranslationKeys;
    //   headerShown: boolean;
    //   headerTitle?: string;
    //   headerBackTitleVisible?: boolean;
    //   headerLeft?: () => JSX.Element;
    //   headerTintColor?: string;
    //   tabBarIcon: ({ color }: { color: string }) => JSX.Element;
  };
};

export const tabs: TTab[] = [
  {
    id: 1,
    name: "index",
    options: {
      title: "Home",
      headerShown: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <FontAwesome size={28} name="home" color={color} />
      ),
    },
  },
  {
    id: 2,
    name: "portfolio",
    options: {
      title: "Portfolio",
      headerShown: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <Ionicons name="briefcase-outline" size={24} color={color} />
      ),
    },
  },
  {
    id: 3,
    name: "search",
    options: {
      title: "Search",
      headerShown: false,
      tabBarIcon: ({ color }: { color: string }) => (
        <FontAwesome size={28} name="search" color={color} />
      ),
    },
  },
  {
    id: 4,
    name: "profile",
    options: {
      title: "Profile",
      headerShown: false,
      headerTitle: "",
      headerBackTitleVisible: true,
      headerLeft: () => (
        <Pressable className="-translate-x-2">
          <Ionicons name="chevron-back" size={30} color={Colors.backBtn} />
        </Pressable>
      ),
      headerTintColor: Colors.backBtn,
      tabBarIcon: ({ color }: { color: string }) => (
        <FontAwesome size={28} name="user" color={color} />
      ),
    },
  },
];
