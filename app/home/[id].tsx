import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import postImage from "@/assets/images/post/post.png";
import BottomButton from "@/components/BottomButton";
import Comments from "@/components/home/Comments";
import { useTranslation } from "react-i18next";

const Post = () => {
  const router = useRouter();
  const { t } = useTranslation();

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
      <BottomButton title={t("back")} onPress={() => router.back()} />

      <ScrollView className="space-y-6 bg-background">
        <View className="min-h-[430] items-center justify-end space-y-8 rounded-b-[20] bg-white pb-10">
          <StatusBar barStyle="dark-content" />

          <Text className="px-4 text-center text-[28px] font-bold">
            {data?.title}
          </Text>
          <Image source={postImage} />
        </View>

        <View className="mx-4">
          <View>
            <Text className="mb-2 text-secondary-grey">{t("about")}</Text>
            <View className="rounded-[16px] bg-white p-4">
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
