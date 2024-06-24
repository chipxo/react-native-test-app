import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <SafeAreaView>
      <View className="bg-background min-h-screen">
        <View className="min-h-[296] rounded-b-[28] bg-primary justify-center items-center">
          <Text className="text-white">Your name</Text>
          <Text className="text-[28px] font-semibold text-white">John doe</Text>
        </View>

        <View className="container px-4 mt-6">
          <View className="bg-white rounded-xl px-6 py-10">
            <Text className="text-[15px] mb-1.5">Test task</Text>
            <Text className="text-secondary-grey text-[13px]">Lorem ipsum</Text>
            <View className="mt-6">
              <Text className="text-primary text-[15px]">
                Go to call {"    >"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
