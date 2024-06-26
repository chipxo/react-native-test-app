import { View, Text, Pressable } from "react-native";
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

type InputFieldProps = {
  name: "name" | "email" | "password";
  labelName: TranslationKeys;
  error: FieldError | undefined;
  errorMessage: string | undefined;
  isPassword?: boolean;
  control: Control<SignUpSchema, any>;
};

const InputField = ({
  name,
  labelName,
  error,
  errorMessage,
  isPassword = false,
  control,
}: InputFieldProps) => {
  const { t } = useTranslation();

  const [showPass, setShowPass] = useState(false);

  return (
    <View>
      {error && (
        <ErrorItem errorMessage={errorMessage} isPassword={isPassword} />
      )}

      <Text className="pl-8 text-tab-icon-default">{t(labelName)}</Text>
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

      {isPassword && (
        <Pressable
          className="absolute right-8 top-10"
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
