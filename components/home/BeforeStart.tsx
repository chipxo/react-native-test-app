import { View, ScrollView, Text } from "react-native";
import React from "react";
import LinkIcon from "./LinkIcon";
import { useTranslation } from "react-i18next";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const BeforeStart = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text
        style={{ fontFamily: "Inter" }}
        className="mb-2 px-4 text-secondary-grey"
      >
        {t("beforeYouStart")}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
      >
        <View className="ml-4 h-[152] w-[233] rounded-xl bg-secondary-grey p-6">
          <View className="flex-row items-center gap-4">
            <View className="rounded-full bg-primary p-4">
              <LinkIcon />
            </View>

            <View>
              <Text
                style={{ fontFamily: "Inter" }}
                className="text-[15px] text-white"
              >
                Lorem ipsum
              </Text>
              <Text
                style={{ fontFamily: "Inter" }}
                className="text-[15px] text-white"
              >
                Lorem ipsum
              </Text>
            </View>
          </View>

          <View className="mt-6 flex-row items-center justify-between">
            <Text
              style={{ fontFamily: "Inter" }}
              className="text-[15px] text-white"
            >
              {t("steps", { count: 2 })}
            </Text>
            <FontAwesome6 name="arrow-right" size={20} color={Colors.white} />
          </View>
        </View>
        <View className="h-[152] w-[233] rounded-xl bg-secondary-red p-6">
          <View className="flex-row items-center gap-4">
            <View className="rounded-full bg-primary p-4 text-secondary-green">
              <LinkIcon isGreen />
            </View>

            <View>
              <Text
                style={{ fontFamily: "Inter" }}
                className="text-[15px] text-white"
              >
                Lorem ipsum
              </Text>
              <Text
                style={{ fontFamily: "Inter" }}
                className="text-[15px] text-white"
              >
                Lorem ipsum
              </Text>
            </View>
          </View>
          <View className="mt-6 flex-row items-center justify-between">
            <Text
              style={{ fontFamily: "Inter" }}
              className="text-[15px] text-secondary-grey"
            >
              {t("steps", { count: 3 })}
            </Text>
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
