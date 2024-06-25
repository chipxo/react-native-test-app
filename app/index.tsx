import { View, SafeAreaView, Button, FlatList } from "react-native";
import BgImg from "@/components/BgImg";
import { items } from "@/constants/WelcomeItems";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import WelcomeItems from "@/components/welcome/WelcomeItems";
import CommonButton from "@/components/CommonButton";
import { t } from "i18next";
import "@/utils/i18n";

export default function WelcomeScreen() {
  return (
    <SafeAreaView>
      <View className="absolute bottom-0">
        <BgImg />
      </View>

      <View className="min-h-screen">
        <WelcomeItems items={items} />

        <Link href={"home"}>go home</Link>

        <View className="mx-6 mt-[100px] rounded-[16px] py-2">
          <Button
            title={t("signIn")}
            color={Colors.primary}
            accessibilityLabel={t("signIn")}
          />
        </View>

        <CommonButton title={t("signUp")} />
      </View>
    </SafeAreaView>
  );
}
