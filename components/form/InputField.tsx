import { View, Pressable } from "react-native";
import { Control, FieldError } from "react-hook-form";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { cn } from "@/utils/cn";
import { Colors } from "@/constants/Colors";
import Input from "./Input";
import { SignUpSchema } from "@/constants/formSchema";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TranslationKeys } from "@/utils/i18n";
import ErrorItem from "./ErrorItem";
import ThemedText from "../ThemedText";

type InputFieldProps = {
  name: "name" | "email" | "password";
  labelName: TranslationKeys;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  isPassword?: boolean;
  isLogIn?: boolean;
  control: Control<SignUpSchema, any>;
};

const InputField = ({
  name,
  labelName,
  error,
  errorMessage,
  isPassword = false,
  isLogIn = false,
  control,
}: InputFieldProps) => {
  const { t } = useTranslation();

  const [showPass, setShowPass] = useState(false);

  return (
    <View>
      {error && <ErrorItem errorMessage={errorMessage} />}

      <ThemedText className="pl-8 text-tab-icon-default">
        {t(labelName)}
      </ThemedText>
      {isPassword ? (
        <Input
          error={error}
          name={name}
          control={control}
          secureTextEntry={!showPass}
        />
      ) : (
        <Input error={error} name={name} control={control} />
      )}

      {isLogIn && error && (
        <ThemedText className="absolute right-4 text-primary">
          {t("forgot")}
        </ThemedText>
      )}

      {isPassword && (
        <Pressable
          className={cn("absolute top-[40]", error ? "right-16" : "right-8")}
          onPress={() => setShowPass((prev) => !prev)}
        >
          <AntDesign
            name="eyeo"
            size={24}
            color={showPass ? Colors.primary : Colors.secondaryGreen}
          />
        </Pressable>
      )}
    </View>
  );
};

export default InputField;
