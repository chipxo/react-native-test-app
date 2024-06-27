import { View } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/build/Feather";
import { useTranslation } from "react-i18next";
import { Colors } from "@/constants/Colors";
import ThemedText from "../ThemedText";

const FormHeader = ({ isSignUp = false }) => {
  const { t } = useTranslation();
  return (
    <View className="flex-row items-center space-x-4 border-b border-profile-fallback p-4">
      <View className="h-[52] w-[48] items-center justify-center rounded-full border border-secondary-green-muted bg-secondary-green-muted/40 pl-1">
        <Feather name="user-plus" size={24} color={Colors.secondaryGreen} />
      </View>
      <View>
        <ThemedText className="mb-1 font-semibold">
          {t(isSignUp ? "signUp" : "login")}
        </ThemedText>
        <ThemedText className="text-secondary-grey">{t("persAcc")}</ThemedText>
      </View>
    </View>
  );
};

export default FormHeader;
