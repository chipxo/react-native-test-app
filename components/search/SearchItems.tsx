import { View, Text, FlatList } from "react-native";
import React from "react";
import { Post } from "../home/Posts";

type SearchItemsProps = {
  data: Post[];
};

const SearchItems = ({ data }: SearchItemsProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View className="bg-white w-full rounded-[16px] p-4 mb-2">
          <Text className="font-semibold text-[15px]">ID: {item.id}</Text>
          <Text>Name: {item.title}</Text>
        </View>
      )}
    />
  );
};

export default SearchItems;
