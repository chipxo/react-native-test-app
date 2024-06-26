import { View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { cn } from "@/utils/cn";

type ErrorIndicatorProps = {
  isPassword?: boolean;
};

const ErrorIndicator = ({ isPassword = false }: ErrorIndicatorProps) => {
  return (
    <View
      className={cn("absolute top-[43]", isPassword ? "right-16" : "right-8")}
    >
      <AntDesign name="infocirlceo" size={18} color={Colors.secondaryRed} />
    </View>
  );
};

export default ErrorIndicator;
