import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { cn } from "@/utils/cn";
import { Colors } from "@/constants/Colors";

type ErrorItemProps = {
  errorMessage: string | undefined;
  isPassword?: boolean;
};

const ErrorItem = ({ errorMessage, isPassword }: ErrorItemProps) => {
  return (
    <>
      <Text className="absolute -top-4 mb-2 pl-8 text-secondary-red">
        {errorMessage}
      </Text>
      <View
        className={cn("absolute top-[43]", isPassword ? "right-16" : "right-8")}
      >
        <AntDesign name="infocirlceo" size={18} color={Colors.secondaryRed} />
      </View>
    </>
  );
};

export default ErrorItem;
