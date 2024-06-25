import { FontAwesome, Ionicons } from "@expo/vector-icons";

export const tabs = [
  {
    id: 1,
    name: "index",
    title: "Home",
    tabBarIcon: ({ color }: { color: string }) => (
      <FontAwesome size={28} name="home" color={color} />
    ),
  },
  {
    id: 2,
    name: "portfolio",
    title: "Portfolio",
    tabBarIcon: ({ color }: { color: string }) => (
      <Ionicons name="briefcase-outline" size={24} color={color} />
    ),
  },
  {
    id: 3,
    name: "search",
    title: "Search",
    tabBarIcon: ({ color }: { color: string }) => (
      <FontAwesome size={28} name="search" color={color} />
    ),
  },
  {
    id: 4,
    name: "profile",
    title: "Profile",
    tabBarIcon: ({ color }: { color: string }) => (
      <FontAwesome size={28} name="user" color={color} />
    ),
  },
];
