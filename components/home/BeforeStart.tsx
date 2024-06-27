import { View, ScrollView } from "react-native";
import React from "react";
import LinkIcon from "./LinkIcon";
import { useTranslation } from "react-i18next";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import ThemedText from "../ThemedText";

const BeforeStart = () => {
  const { t } = useTranslation();
  return (
    <View>
      <ThemedText className="mb-2 px-4 text-secondary-grey">
        {t("beforeYouStart")}
      </ThemedText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="ml-0 gap-4"
      >
        <View className="h-[152] w-[233] rounded-xl bg-secondary-grey p-6">
          <View className="flex-row items-center gap-4">
            <View className="rounded-full bg-primary p-4">
              <LinkIcon />
            </View>

            <View>
              <ThemedText className="text-[15px] text-white">
                Lorem ipsum
              </ThemedText>
              <ThemedText className="text-[15px] text-white">
                Lorem ipsum
              </ThemedText>
            </View>
          </View>

          <View className="mt-6 flex-row items-center justify-between">
            <ThemedText className="text-[15px] text-white">
              {t("steps", { count: 2 })}
            </ThemedText>
            <FontAwesome6 name="arrow-right" size={20} color={Colors.white} />
          </View>
        </View>
        <View className="h-[152] w-[233] rounded-xl bg-secondary-red p-6">
          <View className="flex-row items-center gap-4">
            <View className="rounded-full bg-primary p-4 text-secondary-green">
              <LinkIcon isGreen />
            </View>

            <View>
              <ThemedText className="text-[15px] text-white">
                Lorem ipsum
              </ThemedText>
              <ThemedText className="text-[15px] text-white">
                Lorem ipsum
              </ThemedText>
            </View>
          </View>
          <View className="mt-6 flex-row items-center justify-between">
            <ThemedText className="text-[15px] text-secondary-grey">
              {t("steps", { count: 3 })}
            </ThemedText>
            <FontAwesome6
              name="arrow-right"
              size={20}
              color={Colors.secondaryGrey}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BeforeStart;
