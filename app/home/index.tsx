import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import TestTask from "@/components/home/TestTask";
import BeforeStart from "@/components/home/BeforeStart";
import UserName from "@/components/home/UserName";
import Posts from "@/components/home/Posts";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";

const HomePage = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    useFetch("?_limit=3");
  }, []);
  // Queries
  const query = useQuery({
    queryKey: ["posts"],
    queryFn: () => useFetch("?_limit=3"),
  });

  return (
    <ScrollView>
      <View className="bg-background min-h-screen space-y-6">
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
          <Text className="text-secondary-grey mb-2">Posts</Text>

          <Posts posts={query.data} />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
