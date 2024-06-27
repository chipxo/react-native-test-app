import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileItem from "@/components/profile/ProfileItem";
import { RootState, useAppDispatch } from "@/redux/store";
import { logOut } from "@/redux/auth/authSlice";
import * as SecureStore from "expo-secure-store";
import { useSelector } from "react-redux";
import { deleteUser } from "@/redux/user/userSlice";

const Profile = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { name } = useSelector((state: RootState) => state.user);

  const handleLogOut = async () => {
    await SecureStore.deleteItemAsync("pin");

    setTimeout(() => {
      dispatch(logOut());
      dispatch(deleteUser());
      router.push("welcome");
    }, 600);
  };

  return (
    <View className="min-h-screen bg-white pt-14">
      <View className="pl-2">
        <Ionicons
          name="chevron-back"
          size={24}
          color={Colors.secondaryGrey}
          onPress={() => router.back()}
        />
      </View>
      <View className="mx-4 space-y-6 pt-4">
        <Text className="text-[22px] font-bold">{t("settings")}</Text>
        <View className="flex-row items-center space-x-4 rounded-[16px] border border-common-border px-4 py-6">
          <View className="h-8 w-8 rounded-full bg-profile-fallback" />
          <Text className="font-semibold">{name}</Text>
        </View>

        <View>
          <Text className="mb-2 text-secondary-text">{t("basic")}</Text>
          <ProfileItem
            onPress={() => router.push("home/language")}
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
          <Text className="mb-2 text-secondary-text">{t("other")}</Text>
          <ProfileItem
            onPress={handleLogOut}
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
