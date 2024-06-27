import { View, Pressable, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import BottomButton from "@/components/BottomButton";
import { Feather } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";
import { Colors } from "@/constants/Colors";
import { Redirect, useRouter } from "expo-router";
import NumKeyBoard from "@/components/numKeyBoard/NumKeyBoard";
import * as LocalAuthentication from "expo-local-authentication";
import PinCodeIndicator from "@/components/pinCode/PinCodeIndicator";

const enterPinCode = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { email } = useSelector((state: RootState) => state.user);
  const [pin, setPin] = useState<string>("");

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
    if (pin === storedPin) {
      setTimeout(() => router.push("home"), 800);
    }

    if (pin.length === 5 && pin !== storedPin) {
      alert("Passwords don't match");
      setPin("");
    }

    if (pin.length < 5) alert("Enter 5 digits");
  };

  useEffect(() => {
    const auth = async () => {
      const { success } = await LocalAuthentication.authenticateAsync();
      if (success) {
        setTimeout(() => setPin(storedPin!), 400);
        setTimeout(() => router.push("home"), 800);
      }
    };

    auth();
  }, []);

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

          <Text
            style={{ fontFamily: "Inter" }}
            className="font-Inter text-center text-[15px] font-semibold"
          >
            {email}
          </Text>

          <Pressable className="mt-2">
            <Text
              style={{ fontFamily: "Inter" }}
              className="text-center text-[15px] font-semibold text-primary"
            >
              {t("changeAcc")}
            </Text>
          </Pressable>

          <Text
            style={{ fontFamily: "Inter" }}
            className="mt-8 text-center text-secondary-grey"
          >
            {t("enterCode", { count: 5 })}:
          </Text>

          <PinCodeIndicator length={pin.length} />
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
