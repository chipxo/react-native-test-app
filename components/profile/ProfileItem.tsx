import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Pressable } from "react-native";

type ProfileItemProps = PropsWithChildren & {
  onPress: () => void;
  icon: JSX.Element;
};

const ProfileItem = ({ onPress, children, icon }: ProfileItemProps) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={onPress}
      className="border border-common-border px-4 py-6 rounded-[16px] flex-row items-center justify-between"
    >
      <View className="flex-row space-x-2 items-center">{children}</View>

      <View className="">
        {icon}
        
      </View>
    </Pressable>
  );
};

export default ProfileItem;
