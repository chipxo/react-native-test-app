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
        <View className="mb-2 w-full rounded-[16px] bg-white p-4">
          <Text className="text-[15px] font-semibold">ID: {item.id}</Text>
          <Text>Name: {item.title}</Text>
        </View>
      )}
    />
  );
};

export default SearchItems;
