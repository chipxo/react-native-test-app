import { Colors } from "./Colors";

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
    options: { headerShown: false, gestureEnabled: false },
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
    },
  },
];
