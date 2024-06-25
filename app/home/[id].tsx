import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Post = () => {
  const { id } = useLocalSearchParams();
  console.log(id);

  return (
    <SafeAreaView>
      <Text>Post {id}</Text>
    </SafeAreaView>
  );
};

export default Post;
