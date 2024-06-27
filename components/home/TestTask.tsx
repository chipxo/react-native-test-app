import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";
import img from "@/assets/images/home/test-task.png";

const TestTask = () => {
  const { t } = useTranslation();
  return (
    <View className="mx-4 flex-row justify-between rounded-xl bg-white p-2 pl-6">
      <View className="justify-center">
        <Text className="mb-1.5 text-[15px]">Test task</Text>
        <Text className="text-[13px] text-secondary-text">Lorem ipsum</Text>
        <View className="mt-6 flex-row items-center space-x-20">
          <Text className="text-[15px] font-semibold text-primary">
            {t("goToCall")}
          </Text>
          <FontAwesome name="angle-right" size={24} color={Colors.primary} />
        </View>
      </View>
      <Image source={img} alt="test task image" />
    </View>
  );
};

export default TestTask;
