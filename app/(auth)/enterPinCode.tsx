import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState, useAppDispatch } from "@/redux/store";
import { setLanguage } from "@/redux/lan/languageSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import BackIcon from "@/components/navigation/BackIcon";
import { cn } from "@/utils/cn";
import BottomButton from "@/components/BottomButton";
import { Feather } from "@expo/vector-icons";
import Keychain from "react-native-keychain";
import * as SecureStore from "expo-secure-store";
import { Colors } from "@/constants/Colors";
import { Redirect, useRouter } from "expo-router";

const enterPinCode = () => {
  const { t } = useTranslation();
  const [pin, setPin] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { email } = useSelector((state: RootState) => state.user);

  const handlePress = (value: string) => {
    if (pin.length < 5) {
      setPin((prevPin) => prevPin + value);
    }
  };

  const handleDelete = () => {
    setPin((prevPin) => prevPin.slice(0, -1));
  };

  const storedPin = SecureStore.getItem("pin");

  const handleContinue = async () => {
    console.log(storedPin);
    if (pin === storedPin) router.navigate("home");

    if (pin.length === 5 && pin !== storedPin) {
      alert("Passwords don't match");
      setPin("");
    }

    if (pin.length < 5) alert("Enter 5 digits");
  };

  if (!storedPin) {
    return <Redirect href="createPinCode" />;
  }

  return (
    <>
      <View className="flex-1 bg-white pt-20">
        <View>
          <View className="mx-auto mb-3 h-[48] w-[48] items-center justify-center rounded-full border border-secondary-green-muted bg-secondary-green-muted/40">
            <Feather
              name="smartphone"
              size={24}
              color={Colors.secondaryGreen}
            />
          </View>
          <Text className="text-center text-[15px] font-semibold">{email}</Text>

          <Pressable className="mt-2">
            <Text className="text-center text-[15px] font-semibold text-primary">
              {t("changeAcc")}
            </Text>
          </Pressable>

          <Text className="mt-8 text-center text-secondary-grey">
            {t("enterCode", { count: 5 })}:
          </Text>

          <View className="flex-row justify-center gap-3 pt-5">
            {[...Array(5)].map((_, index) => (
              <View
                key={index}
                className={cn(
                  "h-6 w-6 rounded-full",
                  index < pin.length ? "bg-primary" : "bg-profile-fallback",
                )}
              />
            ))}
          </View>
        </View>

        <View className="mt-52 flex-1 flex-row justify-around border-t border-profile-fallback pt-12">
          <View className="gap-8">
            <TouchableOpacity className="" onPress={() => handlePress("1")}>
              <Text className="text-[28px] font-bold">1</Text>
            </TouchableOpacity>
            <TouchableOpacity className="" onPress={() => handlePress("4")}>
              <Text className="text-[28px] font-bold">4</Text>
            </TouchableOpacity>
            <TouchableOpacity className="" onPress={() => handlePress("7")}>
              <Text className="text-[28px] font-bold">7</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-8">
            <TouchableOpacity className="" onPress={() => handlePress("2")}>
              <Text className="text-[28px] font-bold">2</Text>
            </TouchableOpacity>
            <TouchableOpacity className="" onPress={() => handlePress("5")}>
              <Text className="text-[28px] font-bold">5</Text>
            </TouchableOpacity>
            <TouchableOpacity className="" onPress={() => handlePress("8")}>
              <Text className="text-[28px] font-bold">8</Text>
            </TouchableOpacity>
            <TouchableOpacity className="" onPress={() => handlePress("0")}>
              <Text className="text-[28px] font-bold">0</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-8">
            <TouchableOpacity className="" onPress={() => handlePress("3")}>
              <Text className="text-center text-[28px] font-bold">3</Text>
            </TouchableOpacity>
            <TouchableOpacity className="" onPress={() => handlePress("6")}>
              <Text className="text-center text-[28px] font-bold">6</Text>
            </TouchableOpacity>
            <TouchableOpacity className="" onPress={() => handlePress("9")}>
              <Text className="text-center text-[28px] font-bold">9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete} className="">
              <Feather name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomButton onPress={handleContinue} title={t("continue")} />
    </>
  );
};

export default enterPinCode;
