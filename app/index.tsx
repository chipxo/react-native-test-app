import {
  View,
  SafeAreaView,
  Button,
  FlatList,
  ImageBackground,
  Image,
} from "react-native";
import BgImg from "@/components/BgImg";
import { items } from "@/constants/WelcomeItems";
import { Colors } from "@/constants/Colors";
import { Link, useRouter } from "expo-router";
import WelcomeItems from "@/components/welcome/WelcomeItems";
import CommonButton from "@/components/CommonButton";
import { t } from "i18next";
import "@/utils/i18n";
import bg from "@/assets/images/bg.png";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView>
        <View>
          <WelcomeItems items={items} />

          <View className="mx-6 mt-[100px] rounded-[16px] py-2">
            <Button
              title={t("signIn")}
              color={Colors.primary}
              accessibilityLabel={t("signIn")}
              onPress={() => router.navigate("(auth)/signIn")}
            />
          </View>

          <CommonButton
            title={t("signUp")}
            onPress={() => router.navigate("(auth)/signUp")}
          />
        </View>
      </SafeAreaView>

      <Image source={bg} className="absolute w-screen bottom-0 z-[-10]" />
    </>
  );
}
