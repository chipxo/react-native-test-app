import {
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  StatusBar,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import postImage from "@/assets/images/post/post.png";
import BottomButton from "@/components/BottomButton";
import Comments from "@/components/home/Comments";
import { useTranslation } from "react-i18next";
import ThemedText from "@/components/ThemedText";

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
    return <ThemedText>An error occured</ThemedText>;
  }

  return (
    <>
      <BottomButton title={t("back")} onPress={() => router.back()} />

      <ScrollView className="space-y-6 bg-background">
        <View className="min-h-[430] items-center justify-end space-y-8 rounded-b-[20] bg-white pb-10">
          <StatusBar barStyle="dark-content" />

          <ThemedText className="px-4 text-center text-[28px] font-bold">
            {data?.title}
          </ThemedText>
          <Image source={postImage} />
        </View>

        <View className="mx-4">
          <View>
            <ThemedText className="mb-2 text-secondary-grey">
              {t("about")}
            </ThemedText>
            <View className="rounded-[16px] bg-white p-4">
              <ThemedText>{data?.body}</ThemedText>
            </View>
          </View>

          <Comments comments={comments} />
        </View>
      </ScrollView>
    </>
  );
};

export default Post;
