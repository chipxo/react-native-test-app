import { Colors } from "@/constants/Colors";
import { tabs } from "@/constants/Tabs";
import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.primary }}>
      {tabs.map(({ id, name, title, tabBarIcon }) => (
        <Tabs.Screen
          key={id}
          name={name}
          options={{
            title: t(title),
            headerShown: false,
            tabBarIcon,
          }}
        />
      ))}
    </Tabs>
  );
}
