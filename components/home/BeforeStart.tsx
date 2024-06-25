import { View, Text, ScrollView } from "react-native";
import React from "react";
import LinkIcon from "./LinkIcon";
import { useTranslation } from "react-i18next";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const BeforeStart = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text className="text-secondary-grey mb-2 px-4">
        {t("beforeYouStart")}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-4 ml-0"
      >
        <View className="bg-secondary-grey rounded-xl p-6 w-[233] h-[152]">
          <View className="flex-row items-center gap-4">
            <View className="bg-primary p-4 rounded-full">
              <LinkIcon />
            </View>

            <View>
              <Text className="text-white text-[15px]">Lorem ipsum</Text>
              <Text className="text-white text-[15px]">Lorem ipsum</Text>
            </View>
          </View>

          <View className="mt-6 flex-row justify-between items-center">
            <Text className="text-white text-[15px]">
              {t("steps", { count: 2 })}
            </Text>
            <FontAwesome6 name="arrow-right" size={20} color={Colors.white} />
          </View>
        </View>
        <View className="bg-secondary-red rounded-xl p-6 w-[233] h-[152]">
          <View className="flex-row items-center gap-4">
            <View className="bg-primary p-4 rounded-full text-secondary-green">
              <LinkIcon isGreen />
            </View>

            <View>
              <Text className="text-white text-[15px]">Lorem ipsum</Text>
              <Text className="text-white text-[15px]">Lorem ipsum</Text>
            </View>
          </View>
          <View className="mt-6 flex-row justify-between items-center">
            <Text className="text-secondary-grey text-[15px]">
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
