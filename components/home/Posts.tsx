import { View, FlatList, Pressable, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostsProps = {
  posts: Post[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.title}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Link href={`home/${item.id}`} asChild>
            <Pressable className="my-2 space-y-2 rounded-[16px] bg-white p-3">
              <Text
                style={{ fontFamily: "Inter" }}
                className="text-[18px] font-semibold"
              >
                {item.title[0].toUpperCase() + item.title.slice(1)}
              </Text>
              <Text
                style={{ fontFamily: "Inter" }}
                className="text-[18px] text-secondary-text"
              >
                {item.body[0].toUpperCase() + item.body.slice(1)}
              </Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

export default Posts;
