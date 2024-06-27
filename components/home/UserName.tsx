import { View, ImageBackground } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import bgImage from "@/assets/images/home/bg.png";
import ThemedText from "../ThemedText";

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

      <ThemedText className="text-white">{t("yourName")}</ThemedText>
      <ThemedText className="text-[28px] font-semibold text-white">
        {userName}
      </ThemedText>
    </View>
  );
};

export default UserName;
