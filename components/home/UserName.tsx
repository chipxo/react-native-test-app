import { View, Text } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

type UserNameProps = {
  userName: string;
};

const UserName = ({ userName = "John doe" }: UserNameProps) => {
  const { t } = useTranslation();

  return (
    <View className="min-h-[296] rounded-b-[28] bg-primary justify-center items-center">
      <Text className="text-white">{t("yourName")}</Text>
      <Text className="text-[28px] font-semibold text-white">{userName}</Text>
    </View>
  );
};

export default UserName;
