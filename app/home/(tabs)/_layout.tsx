import { Colors } from "@/constants/Colors";
import { tabs } from "@/constants/Tabs";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.primary }}>
      {tabs.map(({ id, name, title, tabBarIcon }) => (
        <Tabs.Screen
          key={id}
          name={name}
          options={{
            title,
            headerShown: false,
            tabBarIcon,
          }}
        />
      ))}
    </Tabs>
  );
}
