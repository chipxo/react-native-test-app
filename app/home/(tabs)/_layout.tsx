import { Colors } from "@/constants/Colors";
import { tabs } from "@/constants/Tabs";
import { RootState } from "@/redux/store";
import { Redirect, Tabs } from "expo-router";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function TabLayout() {
  const { t } = useTranslation();
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  if (!loggedIn) {
    return <Redirect href="welcome" />;
  }

  if (loggedIn) {
    return (
      <Tabs screenOptions={{ tabBarActiveTintColor: Colors.primary }}>
        {tabs.map(({ id, name, options }) => (
          <Tabs.Screen
            key={id}
            name={name}
            options={{ ...options, title: t(options?.title) }}
          />
        ))}
      </Tabs>
    );
  }
}
