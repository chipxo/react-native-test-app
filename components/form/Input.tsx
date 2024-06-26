import { SignUpSchema } from "@/constants/formSchema";
import { cn } from "@/utils/cn";
import { Control, useController, FieldError } from "react-hook-form";
import { TextInput } from "react-native";

type InputProps = {
  name: "name" | "email" | "password";
  control: Control<SignUpSchema, any>;
  error: FieldError | undefined;
  secureTextEntry?: boolean;
};

const Input = ({ name, control, error, ...props }: InputProps) => {
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });

  return (
    <TextInput
      {...props}
      value={field.value}
      onChangeText={field.onChange}
      className={cn(
        "mx-4 mb-8 mt-2 rounded-[16px] border py-4 pl-4",
        error ? "border-secondary-red" : "border-profile-fallback",
      )}
    />
  );
};

export default Input;
