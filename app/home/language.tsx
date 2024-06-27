import { View, StatusBar } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import ProfileItem from "@/components/profile/ProfileItem";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAppDispatch } from "@/redux/store";
import { setLanguage } from "@/redux/lan/languageSlice";
import ThemedText from "@/components/ThemedText";

const LanguagePage = () => {
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (ln: "en" | "ar") => {
    dispatch(setLanguage(ln));
    i18n.changeLanguage(ln);
  };

  const curLanguage = i18n.language;

  return (
    <View className="min-h-screen bg-white pt-14">
      <StatusBar barStyle="dark-content" />
      <View className="pl-2">
        <Ionicons
          name="chevron-back"
          size={24}
          color={Colors.secondaryGrey}
          onPress={() => router.back()}
        />
      </View>

      <View className="mx-4 space-y-6 pt-4">
        <ThemedText className="text-[22px] font-bold">
          {t("language")}
        </ThemedText>
        <View>
          <ProfileItem
            onPress={() => changeLanguage("en")}
            icon={
              curLanguage === "en" ? (
                <View className="h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Ionicons name="checkmark" size={16} color={Colors.white} />
                </View>
              ) : (
                <View className="h-6 w-6 rounded-full bg-profile-fallback" />
              )
            }
          >
            <MaterialIcons name="language" size={24} color={Colors.primary} />
            <ThemedText className="border font-semibold">English</ThemedText>
          </ProfileItem>
        </View>

        <View>
          <ProfileItem
            onPress={() => changeLanguage("ar")}
            icon={
              curLanguage === "ar" ? (
                <View className="h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <Ionicons name="checkmark" size={16} color={Colors.white} />
                </View>
              ) : (
                <View className="h-6 w-6 rounded-full bg-profile-fallback" />
              )
            }
          >
            <MaterialIcons name="language" size={24} color={Colors.primary} />
            <ThemedText className="border font-semibold">Arabic</ThemedText>
          </ProfileItem>
        </View>
      </View>
    </View>
  );
};

export default LanguagePage;
