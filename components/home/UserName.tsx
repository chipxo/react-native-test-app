import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import bgImage from "@/assets/images/home/bg.png";
import { StatusBar } from "expo-status-bar";

type UserNameProps = {
  userName: string;
};

const UserName = ({ userName = "John doe" }: UserNameProps) => {
  const { t } = useTranslation();

  return (
    <View className="min-h-[296] rounded-b-[28] justify-center items-center">
      <View className="absolute top-0 w-screen ">
        <ImageBackground
          source={bgImage}
          resizeMode="stretch"
          className="w-full h-[296]"
        />
      </View>

      <Text className="text-white">{t("yourName")}</Text>
      <Text className="text-[28px] font-semibold text-white">{userName}</Text>
    </View>
  );
};

export default UserName;
