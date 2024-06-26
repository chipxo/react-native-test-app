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
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import CommonButton from "@/components/CommonButton";
import bg from "@/assets/images/bg.png";
import { useTranslation } from "react-i18next";
import {
  SubmitHandler,
  useForm,
  useController,
  ErrorOption,
  Field,
  FieldArray,
  FieldArrayPath,
  FieldError,
  FieldErrors,
  FieldValues,
  FormState,
  RegisterOptions,
  SubmitErrorHandler,
  UseFormRegisterReturn,
} from "react-hook-form";
import { SignUpSchema, signUpSchema } from "@/constants/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/form/Input";
import ErrorItem from "@/components/form/ErrorItem";
import InputField from "@/components/form/InputField";
import FormHeader from "@/components/form/FormHeader";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    Keyboard.dismiss();
    console.log(data);

    setTimeout(() => reset(), 1000);
  };
  return (
    <>
      <Image source={bg} className="absolute top-0 z-[-10] w-screen" />
      <Pressable
        onPress={() => router.back()}
        className="absolute left-2 top-14 z-10"
      >
        <Ionicons name="chevron-back" size={24} color={Colors.black} />
      </Pressable>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-transparent"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="mt-36 flex-1 justify-between rounded-t-[27] bg-white shadow-xl shadow-secondary-grey/80">
            <StatusBar style="dark" />
            <View className="space-y-6">
              <FormHeader isSignUp />

              <View>
                <InputField
                  name={"name"}
                  error={errors.name}
                  errorMessage={errors.name?.message}
                  control={control}
                />
                <InputField
                  name={"email"}
                  error={errors.email}
                  errorMessage={errors.email?.message}
                  control={control}
                />
                <InputField
                  name={"password"}
                  error={errors.password}
                  errorMessage={errors.password?.message}
                  control={control}
                  isPassword
                />
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
