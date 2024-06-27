import { View } from "react-native";
import React from "react";
import { cn } from "@/utils/cn";

type PinCodeIndicatorProps = {
  length: number;
};

const PinCodeIndicator = ({ length }: PinCodeIndicatorProps) => {
  return (
    <View className="flex-row justify-center gap-3 pt-5">
      {[...Array(5)].map((_, index) => (
        <View
          key={index}
          className={cn(
            "h-6 w-6 rounded-full",
            index < length ? "bg-primary" : "bg-profile-fallback",
          )}
        />
      ))}
    </View>
  );
};

export default PinCodeIndicator;
