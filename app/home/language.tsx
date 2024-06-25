import { View, Text, StatusBar } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import ProfileItem from "@/components/profile/ProfileItem";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const LanguagePage = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (ln: "en" | "ar") => {
    i18n.changeLanguage(ln);
  };

  const curLanguage = i18n.language;

  return (
    <View className="pt-14 bg-white min-h-screen">
      <StatusBar barStyle="dark-content" />
      <View className="pl-2">
        <Ionicons
          name="chevron-back"
          size={24}
          color={Colors.secondaryGrey}
          onPress={() => router.back()}
        />
      </View>

      <View className="mx-4 pt-4 space-y-6">
        <Text className="text-[22px] font-bold">{t("language")}</Text>
        <View>
          <ProfileItem
            onPress={() => changeLanguage("en")}
            icon={
              curLanguage === "en" ? (
                <View className="bg-primary rounded-full h-6 w-6 justify-center items-center">
                  <Ionicons name="checkmark" size={16} color={Colors.white} />
                </View>
              ) : (
                <View className="w-6 h-6 bg-profile-fallback rounded-full" />
              )
            }
          >
            <MaterialIcons name="language" size={24} color={Colors.primary} />
            <Text className="border font-semibold">English</Text>
          </ProfileItem>
        </View>

        <View>
          <ProfileItem
            onPress={() => changeLanguage("ar")}
            icon={
              curLanguage === "ar" ? (
                <View className="bg-primary rounded-full h-6 w-6 justify-center items-center">
                  <Ionicons name="checkmark" size={16} color={Colors.white} />
                </View>
              ) : (
                <View className="w-6 h-6 bg-profile-fallback rounded-full" />
              )
            }
          >
            <MaterialIcons name="language" size={24} color={Colors.primary} />
            <Text className="border font-semibold">Arabic</Text>
          </ProfileItem>
        </View>
      </View>
    </View>
  );
};

export default LanguagePage;
