import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { cn } from "@/utils/cn";
import { Colors } from "@/constants/Colors";

type ErrorItemProps = {
  errorMessage: string | undefined;
};

const ErrorItem = ({ errorMessage }: ErrorItemProps) => {
  return (
    <>
      <Text className="absolute -top-4 mb-2 pl-8 text-secondary-red">
        {errorMessage}
      </Text>
      <View className="absolute right-8 top-[43]">
        <AntDesign name="infocirlceo" size={18} color={Colors.secondaryRed} />
      </View>
    </>
  );
};

export default ErrorItem;
