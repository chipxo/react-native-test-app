import { View, Text, ScrollView } from "react-native";
import React from "react";
import LinkIcon from "./LinkIcon";

const BeforeStart = () => {
  return (
    <View>
      <Text className="text-secondary-grey mb-2 px-4">Before you start</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-4 ml-0"
      >
        <View className="bg-secondary-grey rounded-xl p-6 w-[233] h-[152]">
          <View className="flex-row items-center gap-4">
            <View className="bg-primary p-4 rounded-full">
              <LinkIcon />
            </View>

            <View>
              <Text className="text-white text-[15px]">Lorem ipsum</Text>
              <Text className="text-white text-[15px]">Lorem ipsum</Text>
            </View>
          </View>

          <View className="mt-6">
            <Text className="text-white text-[15px]">2 steps {"    ->"}</Text>
          </View>
        </View>
        <View className="bg-secondary-red rounded-xl p-6 w-[233] h-[152]">
          <View className="flex-row items-center gap-4">
            <View className="bg-primary p-4 rounded-full text-secondary-green">
              <LinkIcon isGreen />
            </View>

            <View>
              <Text className="text-white text-[15px]">Lorem ipsum</Text>
              <Text className="text-white text-[15px]">Lorem ipsum</Text>
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-secondary-grey text-[15px]">
              3 steps {"    ->"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BeforeStart;
