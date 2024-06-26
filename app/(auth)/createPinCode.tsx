import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
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
import Keychain from "react-native-keychain";
import * as SecureStore from "expo-secure-store";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import NumKeyBoard from "@/components/numKeyBoard/NumKeyBoard";

const enterPinCode = () => {
  const { t } = useTranslation();
  const [pin, setPin] = useState("");
  const [pinToRepeat, setPinToRepeat] = useState("");
  const router = useRouter();

  const storedPin = SecureStore.getItem("pin");

  const handlePress = (value: string) => {
    if (pin.length < 5) {
      setPin((prevPin) => prevPin + value);
    }
  };

  const handleDelete = () => {
    setPin((prevPin) => prevPin.slice(0, -1));
  };

  const handleContinue = async () => {
    if (pin.length < 5) {
      setPin("");
      alert("Enter 5 digits");
    }

    if (pin.length === 5 && !pinToRepeat) {
      setPinToRepeat(pin);
      setPin("");
    }

    if (pin.length === 5 && pinToRepeat) {
      if (pin === pinToRepeat) {
        try {
          await SecureStore.setItemAsync("pin", pin);
          setPin("");
          router.navigate("home");
        } catch (error) {
          alert("Error while creating password");
          setPin("");
        }
      }

      if (pin !== pinToRepeat) {
        alert("Pins don't match");
        setPin("");
      }
    }
  };

  return (
    <>
      <BackIcon />
      <View className="flex-1 bg-white pt-20">
        <View>
          <View className="mx-auto mb-6 h-[48] w-[48] items-center justify-center rounded-full border border-secondary-green-muted bg-secondary-green-muted/40">
            <Feather
              name="smartphone"
              size={24}
              color={Colors.secondaryGreen}
            />
          </View>
          <Text className="text-center font-semibold">
            {t(pinToRepeat ? "repeatCode" : "createCode")}
          </Text>

          <Text className="mt-8 text-center text-secondary-grey">
            {t("enterCode", { count: 5 })}
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
          <NumKeyBoard handleDelete={handleDelete} handlePress={handlePress} />
        </View>
      </View>
      <BottomButton onPress={handleContinue} title={t("continue")} />
    </>
  );
};

export default enterPinCode;
