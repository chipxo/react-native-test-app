import React from "react";
import { Text } from "react-native";

type ThemedTextProps = {
  className?: string;
  children: React.ReactNode;
};

const ThemedText = ({ className, children }: ThemedTextProps) => {
  return (
    <Text style={{ fontFamily: "Inter" }} className={className}>
      {children}
    </Text>
  );
};

export default ThemedText;
