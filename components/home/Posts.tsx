import { View, Text, FlatList, Pressable } from "react-native";
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
            <Pressable className="bg-white my-2 p-3 rounded-[16px] space-y-2 ">
              <Text className="text-[18px] font-semibold">
                {item.title[0].toUpperCase() + item.title.slice(1)}
              </Text>
              <Text className="text-secondary-text text-[18px]">
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
