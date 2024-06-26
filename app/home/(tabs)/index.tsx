import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import TestTask from "@/components/home/TestTask";
import BeforeStart from "@/components/home/BeforeStart";
import UserName from "@/components/home/UserName";
import Posts from "@/components/home/Posts";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { useTranslation } from "react-i18next";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Redirect } from "expo-router";

const HomePage = () => {
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const { name } = useSelector((state: RootState) => state.user);

  const { t } = useTranslation();

  const query = "?_limit=3";

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", query],
    queryFn: () => useFetch(query),
  });
  console.log("home data", data);

  if (!loggedIn) {
    return <Redirect href="welcome" />;
  }

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>An error occured</Text>;
  }

  return (
    <View className="bg-background">
      <ScrollView>
        <View className="min-h-screen space-y-6">
          <UserName userName={name} />

          <View className="space-y-8">
            <View>
              <TestTask />
            </View>

            <View>
              <BeforeStart />
            </View>
          </View>

          <View className="px-4">
            <Text className="text-secondary-grey">{t("posts")}</Text>

            <Posts posts={data} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
