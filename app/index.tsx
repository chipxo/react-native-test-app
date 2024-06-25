import { View, SafeAreaView, Button, FlatList } from "react-native";
import BgImg from "@/components/BgImg";
import { items } from "@/constants/WelcomeItems";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import WelcomeItems from "@/components/welcome/WelcomeItems";

export default function WelcomeScreen() {
  return (
    <SafeAreaView>
      <View className="absolute bottom-0">
        <BgImg />
      </View>

      <View className="min-h-screen">
        <WelcomeItems items={items} />

        <View className="mx-6 mt-[100px] rounded-[16px] py-2">
          <Button
            title="Sign in"
            color={Colors.primary}
            accessibilityLabel="Sign in"
          />
        </View>

        <View className="mx-6 rounded-[16px] bg-primary py-2">
          <Button
            title="Sign up"
            color={Colors.white}
            accessibilityLabel="Sign in"
          />
        </View>

        <Link href="home">Go home</Link>
      </View>
    </SafeAreaView>
  );
}
