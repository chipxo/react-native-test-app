import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import CommonButton from "@/components/CommonButton";
import bg from "@/assets/images/bg.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, signUpSchema } from "@/constants/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/form/InputField";
import FormHeader from "@/components/form/FormHeader";
import BackIcon from "@/components/navigation/BackIcon";

const SignUp = () => {
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
      <BackIcon />

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
                  name="name"
                  labelName="name"
                  error={errors.name}
                  errorMessage={errors.name?.message}
                  control={control}
                />
                <InputField
                  name="email"
                  labelName="email"
                  error={errors.email}
                  errorMessage={errors.email?.message}
                  control={control}
                />
                <InputField
                  name="password"
                  labelName="password"
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
