import { View, Text } from "react-native";
import React from "react";

const TestTask = () => {
  return (
    <View className="bg-white rounded-xl px-6 py-10 mx-4">
      <Text className="text-[15px] mb-1.5">Test task</Text>
      <Text className="text-secondary-text text-[13px]">Lorem ipsum</Text>
      <View className="mt-6">
        <Text className="text-primary text-[15px]">Go to call {"    >"}</Text>
      </View>
    </View>
  );
};

export default TestTask;
