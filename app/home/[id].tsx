import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  Image,
  StatusBar,
  Pressable,
  SafeAreaView,
  Button,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import postImage from "@/assets/images/post/post.png";
import BottomButton from "@/components/BottomButton";
import Comments from "@/components/home/Comments";

const Post = () => {
  const router = useRouter();

  const { id } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => useFetch(`/${id}`),
  });

  const {
    data: comments,
    isLoading: commentsLoading,
    error: commentsError,
  } = useQuery({
    queryKey: ["posts", id, "comments"],
    queryFn: () => useFetch(`/${id}/comments`),
  });

  if (isLoading || commentsLoading) {
    return <ActivityIndicator />;
  }

  if (error || commentsError) {
    return <Text>An error occured</Text>;
  }

  return (
    <>
      <BottomButton title="Back" onPress={() => router.back()} />

      <ScrollView className="bg-background space-y-6">
        <View className="bg-white min-h-[430] rounded-b-[20] items-center justify-end pb-10 space-y-8">
          <StatusBar barStyle="dark-content" />

          <Text className="text-[28px] text-center px-4 font-bold">
            {data?.title[0].toUpperCase() + data?.title.slice(1)}
          </Text>
          <Image source={postImage} />
        </View>

        <View className="mx-4">
          <View>
            <Text className="text-secondary-grey mb-2">About</Text>
            <View className="bg-white rounded-[16px] p-4">
              <Text>{data?.body}</Text>
            </View>
          </View>

          <Comments comments={comments} />
        </View>
      </ScrollView>
    </>
  );
};

export default Post;
