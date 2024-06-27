import { useTranslation } from "react-i18next";
import { View, FlatList, Text } from "react-native";

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
      <Text
        style={{ fontFamily: "Inter" }}
        className="mb-2 text-secondary-grey"
      >
        {t("comments")}
      </Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.name}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View className="mb-4 rounded-[16px] bg-white p-4">
            <Text
              style={{ fontFamily: "Inter" }}
              className="my-2 text-[18px] font-semibold"
            >
              {item.name}
            </Text>
            <Text
              style={{ fontFamily: "Inter" }}
              className="my-2 text-[16px] text-secondary-text"
            >
              {item.email}
            </Text>
            <Text style={{ fontFamily: "Inter" }} className="my-2">
              {item.body}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Comments;
