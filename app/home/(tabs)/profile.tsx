import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";

const Profile = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <View className="pt-14 bg-white min-h-screen">
      <StatusBar barStyle="dark-content" />
      <View className="realtive left-0 pl-2">
        <Ionicons
          name="chevron-back"
          size={30}
          color={Colors.secondaryGrey}
          onPress={() => router.back()}
        />
      </View>
      <View className="mx-4 pt-4 space-y-6">
        <Text className="text-[22px] font-bold">{t("settings")}</Text>
        <View className="border border-common-border rounded-[16px] p-4 flex-row items-center space-x-4">
          <View className="rounded-full bg-profile-fallback h-8 w-8" />
          <Text className="font-semibold">John Doe</Text>
        </View>
        <View>
          <Text>Basic</Text>

          <View></View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
