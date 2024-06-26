import {
  View,
  SafeAreaView,
  Button,
  FlatList,
  ImageBackground,
  Image,
  Text,
} from "react-native";
import BgImg from "@/components/BgImg";
import { items } from "@/constants/WelcomeItems";
import { Colors } from "@/constants/Colors";
import { Link, Redirect, useRouter } from "expo-router";
import WelcomeItems from "@/components/welcome/WelcomeItems";
import CommonButton from "@/components/CommonButton";
import { t } from "i18next";
import bg from "@/assets/images/bg.png";
import { RootState, store } from "@/redux/store";
import { useSelector } from "react-redux";

export default function WelcomeScreen() {
  const router = useRouter();
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  if (loggedIn) {
    return <Redirect href="enterPinCode" />;
  }
  return (
    <>
      <SafeAreaView>
        <View>
          <WelcomeItems items={items} />
          {/* <Link href="(auth)/enterPinCode">pin code</Link>
          <Link href="home/(tabs)/profile">profile</Link> */}
          <View className="mx-6 mt-[100px] rounded-[16px] py-2">
            <Button
              title={t("signIn")}
              color={Colors.primary}
              accessibilityLabel={t("signIn")}
              onPress={() => router.navigate("(auth)/signIn")}
            />
          </View>
          {/* <Text>
            {t("continue")} {store.getState().lang.lan}
          </Text> */}

          <CommonButton
            title={t("signUp")}
            onPress={() => router.navigate("(auth)/signUp")}
          />
        </View>
      </SafeAreaView>

      <Image source={bg} className="absolute bottom-0 z-[-10] w-screen" />
    </>
  );
}
