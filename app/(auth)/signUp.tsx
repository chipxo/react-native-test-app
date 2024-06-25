import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ImageBackground,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import bg from "@/assets/images/bg.png";
import BottomButton from "@/components/BottomButton";
import CommonButton from "@/components/CommonButton";

const signUp = () => {
  const { t } = useTranslation();
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    // <View>
    //   <Image source={bg} className="absolute w-screen top-0 z-[-10]" />
    //   <StatusBar style="dark" />
    //   <View className="pt-36">
    //     <View className="h-full rounded-t-[27px] bg-white shadow-secondary-grey/80">
    //       <View className="border-b px-4 py-4 border-profile-fallback flex-row items-center space-x-2">
    //         <View className="border rounded-full items-center pl-1 justify-center bg-secondary-green-muted/40 border-secondary-green-muted w-[48] h-[52]">
    //           <Feather
    //             name="user-plus"
    //             size={24}
    //             color={Colors.secondaryGreen}
    //           />
    //         </View>
    //         <View>
    //           <Text className="font-semibold mb-1">{t("signUp")}</Text>
    //           <Text className="text-secondary-grey">{t("persAcc")}</Text>
    //         </View>
    //       </View>

    //       <View className="mt-6">
    //         <Text className="pl-8 text-tab-icon-default">{t("name")}</Text>
    //         <TextInput className="border mx-4 mt-4 border-profile-fallback rounded-[16px] mb-6 py-4 pl-4" />
    //       </View>
    //       <View>
    //         <Text className="pl-8 text-tab-icon-default">{t("email")}</Text>
    //         <TextInput className="border mx-4 mt-4 border-profile-fallback rounded-[16px] mb-6 py-4 pl-4" />
    //       </View>
    //       <View className="relative">
    //         <Text className="pl-8 text-tab-icon-default">{t("password")}</Text>
    //         <TextInput
    //           className="border mx-4 mt-4 border-profile-fallback rounded-[16px] mb-6 py-4 pl-4"
    //           secureTextEntry={showPass}
    //         />
    //         <Pressable className="absolute right-8 top-12">
    //           <AntDesign
    //             name="eyeo"
    //             size={24}
    //             color={showPass ? Colors.secondaryGreen : Colors.primary}
    //             onPress={() => setShowPass((prev) => !prev)}
    //           />
    //         </Pressable>
    //       </View>

    //       <KeyboardAvoidingView
    //         behavior={Platform.OS === "ios" ? "padding" : "height"}
    //         style={styles.container}
    //       >
    //         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //           <View style={styles.inner}>
    //             <CommonButton onPress={handleSubmit} title={t("continue")} />
    //           </View>
    //         </TouchableWithoutFeedback>
    //       </KeyboardAvoidingView>
    //     </View>
    //   </View>
    // </View>
  );
};

export default signUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

{
  /* <View className="mt-12">
        <Text className="pl-8 text-tab-icon-default">{t("name")}</Text>
        <TextInput className="border mx-4 mt-4 border-profile-fallback rounded-[16px] mb-6 py-4 pl-4" />
      </View> */
}

{
  /* <SafeAreaView>
        <View className="mt-32 rounded-t-[27px] bg-white min-h-screen shadow-2xl shadow-secondary-grey/80">
          <View className="border-b px-4 py-4 border-profile-fallback flex-row items-center space-x-2">
            <View className="border rounded-full items-center pl-1 justify-center bg-secondary-green-muted/40 border-secondary-green-muted w-[48] h-[52]">
              <Feather
                name="user-plus"
                size={24}
                color={Colors.secondaryGreen}
              />
            </View>
            <View>
              <Text className="font-semibold mb-1">{t("signUp")}</Text>
              <Text className="text-secondary-grey">{t("persAcc")}</Text>
            </View>
          </View>

          <View className="mt-6">
            <Text className="pl-8 text-tab-icon-default">{t("name")}</Text>
            <TextInput className="border mx-4 mt-4 border-profile-fallback rounded-[16px] mb-6 py-4 pl-4" />
          </View>
          <View>
            <Text className="pl-8 text-tab-icon-default">{t("email")}</Text>
            <TextInput className="border mx-4 mt-4 border-profile-fallback rounded-[16px] mb-6 py-4 pl-4" />
          </View>
          <View className="relative">
            <Text className="pl-8 text-tab-icon-default">{t("password")}</Text>
            <TextInput
              className="border mx-4 mt-4 border-profile-fallback rounded-[16px] mb-6 py-4 pl-4"
              secureTextEntry={showPass}
            />
            <Pressable className="absolute right-8 top-12">
              <AntDesign
                name="eyeo"
                size={24}
                color={showPass ? Colors.secondaryGreen : Colors.primary}
                onPress={() => setShowPass((prev) => !prev)}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView> */
}
{
  /* <View className="absolute w-full bottom-10">
        <CommonButton onPress={handleSubmit} title={t("continue")} />
      </View> */
}
