import { View, Pressable, Keyboard, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import CommonButton from "@/components/CommonButton";
import bg from "@/assets/images/bg.png";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, signUpSchema } from "@/constants/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/form/InputField";
import FormHeader from "@/components/form/FormHeader";
import { Link, Redirect, useRouter } from "expo-router";
import BackIcon from "@/components/navigation/BackIcon";
import { useAuth } from "@/hooks/useAuth";
import { RootState, useAppDispatch } from "@/redux/store";
import { logIn } from "@/redux/auth/authSlice";
import { useSelector } from "react-redux";
import { createUser } from "@/redux/user/userSlice";
import { storeTokens } from "@/utils/storeTokens";

const SignIn = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loggedIn } = useSelector((state: RootState) => state.auth);
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchema> = async (data) => {
    Keyboard.dismiss();

    try {
      const authResponse = await useAuth(data);

      if (authResponse) {
        setTimeout(() => {
          reset();
        }, 1000);

        const { token, refreshToken } = authResponse;

        await storeTokens(token, refreshToken);

        dispatch(createUser(authResponse));
        dispatch(logIn());
      }
      router.push("createPinCode");
    } catch (e) {
      console.log("Error while auth: ", e);
      alert("Wrong user name or e-mail");
      reset();
    }
  };

  if (loggedIn) {
    return <Redirect href="home" />;
  }

  return (
    <>
      <Image source={bg} className="absolute top-0 z-[-10] w-screen" />
      <BackIcon />

      <Pressable onPress={Keyboard.dismiss}>
        <View className="mt-36 min-h-screen flex-1 justify-between rounded-t-[27] bg-white shadow-xl shadow-secondary-grey/80">
          <StatusBar style="dark" />
          <View className="space-y-6">
            <FormHeader />

            <View>
              <InputField
                name="name"
                labelName="name"
                error={errors.name}
                errorMessage={errors.name?.message}
                control={control}
              />
              <InputField
                isLogIn
                name="password"
                labelName="password"
                error={errors.password}
                errorMessage={errors.password?.message}
                control={control}
                isPassword
              />
              <CommonButton
                onPress={handleSubmit(onSubmit)}
                title={t("continue")}
              />
              <Link
                href="(auth)/signUp"
                className="mx-2 mt-6 text-center text-[18px] text-primary"
              >
                {t("crAcc")}
              </Link>
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default SignIn;
