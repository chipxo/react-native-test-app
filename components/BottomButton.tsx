import { View, Text, Pressable } from "react-native";
import React from "react";
import CommonButton from "./CommonButton";

type BottomButtonProps = {
  onPress: () => void;
  title: string;
};

const BottomButton = ({ onPress, title }: BottomButtonProps) => {
  return (
    <View className="h-[98] absolute bottom-0 z-[10] left-0 bg-white w-full pt-3 border-t border-[#E6EBF5]">
      <CommonButton title={title} onPress={onPress} />
    </View>
  );
};

export default BottomButton;
