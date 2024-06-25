import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const TestTask = () => {
  return (
    <View className="bg-white rounded-xl px-6 py-10 mx-4">
      <Text className="text-[15px] mb-1.5">Test task</Text>
      <Text className="text-secondary-text text-[13px]">Lorem ipsum</Text>
      <View className="mt-6 flex-row items-center space-x-20">
        <Text className="text-primary text-[15px] font-semibold">
          Go to call{" "}
        </Text>
        <FontAwesome name="angle-right" size={24} color={Colors.primary} />
      </View>
    </View>
  );
};

export default TestTask;
