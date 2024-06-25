import { Text, Pressable } from "react-native";

type CommonButtonProps = {
  onPress: () => void;
  title: string;
};

const CommonButton = ({ onPress, title }: CommonButtonProps) => {
  return (
    <Pressable onPress={onPress} className="bg-primary rounded-[16px] p-4">
      <Text className="text-center text-white">{title}</Text>
    </Pressable>
  );
};

export default CommonButton;
