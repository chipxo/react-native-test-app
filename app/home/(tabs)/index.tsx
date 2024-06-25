import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import TestTask from "@/components/home/TestTask";
import BeforeStart from "@/components/home/BeforeStart";
import UserName from "@/components/home/UserName";
import Posts from "@/components/home/Posts";
import { useIsFetching, useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

const HomePage = () => {
  const { t } = useTranslation();

  const query = "?_limit=3";

  const { data, isLoading, error, isFetched } = useQuery({
    queryKey: ["posts", query],
    queryFn: () => useFetch(query),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>An error occured</Text>;
  }

  return (
    <View className="bg-background">
      <ScrollView>
        <View className="min-h-screen space-y-6">
          <UserName userName="John Doe" />

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
