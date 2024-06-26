import { TranslationKeys, resources } from "@/utils/i18n";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScreenProps } from "expo-router/build/useScreens";

type TTab = ScreenProps & {
  id: number;
  options: {
    title: TranslationKeys;
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

      tabBarIcon: ({ color }: { color: string }) => (
        <FontAwesome size={28} name="user" color={color} />
      ),
    },
  },
];
