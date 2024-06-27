import {
  View,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  Text,
} from "react-native";
import TestTask from "@/components/home/TestTask";
import BeforeStart from "@/components/home/BeforeStart";
import UserName from "@/components/home/UserName";
import Posts from "@/components/home/Posts";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { useTranslation } from "react-i18next";
import { RootState, useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { setupAxiosInterceptor } from "@/utils/setupAxiosInterceptor";
import { getTokens } from "@/utils/getTokens";
import { User, createUser } from "@/redux/user/userSlice";
import { getCurrentUser } from "@/utils/getCurrentUser";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const { name } = useSelector((state: RootState) => state.user);
  const { t } = useTranslation();
  const [refreshedUser, setRefreshedUser] = useState<User | null>(null);

  const query = "?_limit=3";

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", query],
    queryFn: () => useFetch(query),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await setupAxiosInterceptor();
        const { accessToken, refreshToken } = await getTokens();

        const user = await getCurrentUser(refreshToken);

        setRefreshedUser(user);
      } catch (error) {
        console.log("Failed to fetch user data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (refreshedUser) {
      dispatch(createUser(refreshedUser));
    }
  }, [dispatch]);

  if (!refreshedUser) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (!loggedIn) {
    return <Redirect href="welcome" />;
  }

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text style={{ fontFamily: "Inter" }}>An error occured</Text>
      </SafeAreaView>
    );
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
            <Text
              style={{ fontFamily: "Inter" }}
              className="text-secondary-grey"
            >
              {t("posts")}
            </Text>

            <Posts posts={data} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
