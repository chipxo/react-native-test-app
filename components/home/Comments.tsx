import { useTranslation } from "react-i18next";
import { View, FlatList } from "react-native";
import ThemedText from "../ThemedText";

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type CommentsProps = {
  comments: Comment[];
};

const Comments = ({ comments }: CommentsProps) => {
  const { t } = useTranslation();

  return (
    <View className="mt-6 pb-[100]">
      <ThemedText className="mb-2 text-secondary-grey">
        {t("comments")}
      </ThemedText>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.name}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View className="mb-4 rounded-[16px] bg-white p-4">
            <ThemedText className="my-2 text-[18px] font-semibold">
              {item.name}
            </ThemedText>
            <ThemedText className="my-2 text-[16px] text-secondary-text">
              {item.email}
            </ThemedText>
            <ThemedText className="my-2">{item.body}</ThemedText>
          </View>
        )}
      />
    </View>
  );
};

export default Comments;
