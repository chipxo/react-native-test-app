import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function TabLayout() {
  const { id } = useLocalSearchParams();
  const [showTabs, setShowTabs] = useState(false);
  console.log(id);

  useEffect(() => {
    if (id) {
      setShowTabs(false);
    } else {
      setShowTabs(true);
    }
  }, [id]);

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.light.primary }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="briefcase-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
