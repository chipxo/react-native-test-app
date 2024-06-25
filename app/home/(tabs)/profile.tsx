import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";
import { Link, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileItem from "@/components/profile/ProfileItem";
import { StatusBar } from "expo-status-bar";

const Profile = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <View className="pt-14 bg-white min-h-screen">
      <View className="pl-2">
        <Ionicons
          name="chevron-back"
          size={24}
          color={Colors.secondaryGrey}
          onPress={() => router.back()}
        />
      </View>
      <View className="mx-4 pt-4 space-y-6">
        <Text className="text-[22px] font-bold">{t("settings")}</Text>
        <View className="border border-common-border rounded-[16px] px-4 py-6 flex-row items-center space-x-4">
          <View className="rounded-full bg-profile-fallback h-8 w-8" />
          <Text className="font-semibold">John Doe</Text>
        </View>

        <View>
          <Text className="text-secondary-text mb-2">{t("basic")}</Text>
          <ProfileItem
            onPress={() => router.navigate("home/language")}
            icon={
              <View className="rotate-180">
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={Colors.chevroneMuted}
                />
              </View>
            }
          >
            <MaterialIcons name="language" size={24} color={Colors.primary} />
            <Text className="border font-semibold">{t("language")}</Text>
          </ProfileItem>
        </View>

        <View>
          <Text className="text-secondary-text mb-2">{t("other")}</Text>
          <ProfileItem
            onPress={() => console.log("pressed")}
            icon={
              <View className="rotate-180">
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={Colors.chevroneMuted}
                />
              </View>
            }
          >
            <Ionicons name="log-out-outline" size={24} color={Colors.primary} />
            <Text className="border font-semibold">{t("logOut")}</Text>
          </ProfileItem>
        </View>
      </View>
    </View>
  );
};

export default Profile;
