import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState, useAppDispatch } from "@/redux/store";
import { setLanguage } from "@/redux/lan/languageSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import BackIcon from "@/components/navigation/BackIcon";
import { cn } from "@/utils/cn";
import BottomButton from "@/components/BottomButton";

const enterPinCode = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();
  const { lan } = useSelector((state: RootState) => state.lang);

  return (
    <>
      <BackIcon />
      <View className="min-h-screen bg-white pt-20">
        <Text className="text-center font-semibold">Create a Pin code</Text>
        <Text className="mt-8 text-center text-secondary-grey">
          enter 5 digit code:
        </Text>

        <View className="flex-row justify-center gap-3 pt-5">
          <View className={cn("h-6 w-6 rounded-full", "bg-primary")} />
          <View className={cn("h-6 w-6 rounded-full", "bg-primary")} />
          <View className={cn("h-6 w-6 rounded-full", "bg-primary")} />
          <View className={cn("h-6 w-6 rounded-full", "bg-primary")} />
          <View className={cn("h-6 w-6 rounded-full", "bg-primary")} />
        </View>
        <View className="mt-20 flex-row justify-around border-t border-black">
          <View className="">
            <Text className="text-[28px] font-bold">1</Text>
            <Text className="text-[28px] font-bold">4</Text>
            <Text className="text-[28px] font-bold">7</Text>
          </View>
          <View>
            <Text className="text-[28px] font-bold">2</Text>
            <Text className="text-[28px] font-bold">5</Text>
            <Text className="text-[28px] font-bold">8</Text>
            <Text className="text-[28px] font-bold">0</Text>
          </View>
          <View>
            <Text className="text-[28px] font-bold">3</Text>
            <Text className="text-[28px] font-bold">6</Text>
            <Text className="text-[28px] font-bold">9</Text>
            <Text className="text-[28px] font-bold">d</Text>
          </View>
        </View>
      </View>
      <BottomButton onPress={() => {}} title={t("continue")} />
    </>
  );
};

export default enterPinCode;
