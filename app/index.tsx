import { View, SafeAreaView, Button, FlatList } from "react-native";
import BgImg from "@/components/BgImg";
import { items } from "@/constants/WelcomeItems";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <SafeAreaView>
      <View className="absolute bottom-0">
        <BgImg />
      </View>

      {/* <WelcomeItems items={items} />
       */}
      <View className="min-h-screen">
        <View className="flex flex-row p-6 gap-6">
          <View>
            <FlatList
              data={items.slice(0, 3)}
              renderItem={({ item }) => (
                <View className="mb-6">{item.item}</View>
              )}
              keyExtractor={(item) => item.title}
            />
          </View>

          <View className="pt-[68]">
            <FlatList
              data={items.slice(3)}
              renderItem={({ item }) => (
                <View className="mb-6">{item.item}</View>
              )}
              keyExtractor={(item) => item.title}
            />
          </View>
        </View>

        <View className="mx-6 mt-[100px] rounded-[16px] py-2">
          <Button
            title="Sign in"
            color={Colors.light.primary}
            accessibilityLabel="Sign in"
          />
        </View>

        <View className="mx-6 rounded-[16px] bg-primary py-2">
          <Button
            title="Sign up"
            color={Colors.light.white}
            accessibilityLabel="Sign in"
          />
        </View>
        <Link href="/home">Go home</Link>
      </View>
    </SafeAreaView>
  );
}
