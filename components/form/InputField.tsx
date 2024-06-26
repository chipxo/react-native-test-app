import { View, Text } from "react-native";
import { Control, FieldError } from "react-hook-form";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { cn } from "@/utils/cn";
import { Colors } from "@/constants/Colors";
import Input from "./Input";
import { SignUpSchema } from "@/constants/formSchema";

type InputFieldProps = {
  error: FieldError | undefined;
  errorMessage: string | undefined;
  isPassword?: boolean;
  control: Control<SignUpSchema, any>;
};

const InputField = ({
  error,
  errorMessage,
  isPassword,
  control,
}: InputFieldProps) => {
  return (
    <View>
      {error && (
        <>
          <Text className="absolute -top-4 mb-2 pl-8 text-secondary-red">
            {errorMessage}
          </Text>
          <View
            className={cn(
              "absolute top-[43]",
              isPassword ? "right-16" : "right-8",
            )}
          >
            <AntDesign
              name="infocirlceo"
              size={18}
              color={Colors.secondaryRed}
            />
          </View>
        </>
      )}
      <Text className="pl-8 text-tab-icon-default">{t("password")}</Text>
      <Input
        error={error}
        name="password"
        control={control}
        secureTextEntry={showPass}
      />
      <Pressable
        className="absolute right-8 top-10"
        onPress={() => setShowPass((prev) => !prev)}
      >
        <AntDesign
          name="eyeo"
          size={24}
          color={showPass ? Colors.secondaryGreen : Colors.primary}
        />
      </Pressable>
    </View>
  );
};

export default InputField;
