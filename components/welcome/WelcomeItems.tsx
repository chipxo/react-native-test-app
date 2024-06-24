import { items } from "@/constants/WelcomeItems";
import React from "react";
import { View, Image, type ImageSourcePropType, FlatList } from "react-native";

type Item = {
  title: string;
  item: React.JSX.Element;
};

type WelcomeItemsProps = {
  items: Item[];
};

const WelcomeItems = ({ items }: WelcomeItemsProps) => {
  return (
    <View className="flex flex-row p-6 gap-6">
      <View>
        <FlatList
          data={items.slice(0, 3)}
          renderItem={({ item }) => <View className="my-3">{item.item}</View>}
          keyExtractor={(item) => item.title}
        />
      </View>

      <View className="pt-[68]">
        <FlatList
          data={items.slice(3)}
          renderItem={({ item }) => <View className="my-3">{item.item}</View>}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
};

export default WelcomeItems;
