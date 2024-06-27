import { View, ImageBackground, Text } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import bgImage from "@/assets/images/home/bg.png";

type UserNameProps = {
  userName: string | undefined;
};

const UserName = ({ userName = "John doe" }: UserNameProps) => {
  const { t } = useTranslation();

  return (
    <View className="min-h-[296] items-center justify-center rounded-b-[28]">
      <View className="absolute top-0 w-screen">
        <ImageBackground
          source={bgImage}
          resizeMode="stretch"
          className="h-[296] w-full"
        />
      </View>

      <Text style={{ fontFamily: "Inter" }} className="text-white">
        {t("yourName")}
      </Text>
      <Text
        style={{ fontFamily: "Inter" }}
        className="text-[28px] font-semibold text-white"
      >
        {userName}
      </Text>
    </View>
  );
};

export default UserName;
