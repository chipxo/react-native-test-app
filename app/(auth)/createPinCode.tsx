import { Text, View } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BackIcon from "@/components/navigation/BackIcon";
import BottomButton from "@/components/BottomButton";
import * as SecureStore from "expo-secure-store";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import NumKeyBoard from "@/components/numKeyBoard/NumKeyBoard";
import PinCodeIndicator from "@/components/pinCode/PinCodeIndicator";

const enterPinCode = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [pin, setPin] = useState("");
  const [pinToRepeat, setPinToRepeat] = useState("");

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
          setTimeout(() => router.push("home"), 800);
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

          <Text
            style={{ fontFamily: "Inter" }}
            className="text-center font-semibold"
          >
            {t(pinToRepeat ? "repeatCode" : "createCode")}
          </Text>

          <Text
            style={{ fontFamily: "Inter" }}
            className="mt-8 text-center text-secondary-grey"
          >
            {t("enterCode", { count: 5 })}
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
