import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import CommonButton from "@/components/CommonButton";
import bg from "@/assets/images/bg.png";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm, useController } from "react-hook-form";
import { SignUpSchema, signUpSchema } from "@/constants/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/form/Input";

type FormSchema = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [showPass, setShowPass] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Image source={bg} className="absolute top-0 z-[-10] w-screen" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-transparent"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="mt-36 flex-1 justify-between rounded-t-[27] bg-white shadow-xl shadow-secondary-grey/80">
            <StatusBar style="dark" />
            <View className="space-y-6">
              <View className="flex-row items-center space-x-4 border-b border-profile-fallback p-4">
                <View className="h-[52] w-[48] items-center justify-center rounded-full border border-secondary-green-muted bg-secondary-green-muted/40 pl-1">
                  <Feather
                    name="user-plus"
                    size={24}
                    color={Colors.secondaryGreen}
                  />
                </View>
                <View>
                  <Text className="mb-1 font-semibold">{t("signUp")}</Text>
                  <Text className="text-secondary-grey">{t("persAcc")}</Text>
                </View>
              </View>

              <View>
                <View>
                  <Text className="pl-8 text-tab-icon-default">
                    {t("name")}
                  </Text>

                  <Input name="name" control={control} error={errors.name} />
                </View>

                <View>
                  <Text className="pl-8 text-tab-icon-default">
                    {t("email")}
                  </Text>

                  <Input name="email" control={control} error={errors.email} />
                </View>

                <View>
                  <Text className="pl-8 text-tab-icon-default">
                    {t("password")}
                  </Text>
                  <Input
                    error={errors.password}
                    name="password"
                    control={control}
                    secureTextEntry={showPass}
                  />
                  <Pressable
                    className="absolute right-8 top-12"
                    onPress={() => setShowPass((prev) => !prev)}
                  >
                    <AntDesign
                      name="eyeo"
                      size={24}
                      color={showPass ? Colors.secondaryGreen : Colors.primary}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
            <View className="absolute bottom-0 w-full pb-8">
              <CommonButton onPress={handleSubmit(onSubmit)} title="Continue" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
