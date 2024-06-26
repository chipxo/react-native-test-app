import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const BackIcon = () => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.back()}
      className="absolute left-2 top-14 z-10"
    >
      <Ionicons name="chevron-back" size={24} color={Colors.black} />
    </Pressable>
  );
};

export default BackIcon;
