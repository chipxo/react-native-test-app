import { Colors } from "@/constants/Colors";
import { Text, View, Button } from "react-native";

type CommonButtonProps = {
  onPress?: () => void;
  title: string;
};

const CommonButton = ({ onPress, title }: CommonButtonProps) => {
  return (
    <View className="bg-primary rounded-[16px] py-2 mx-4">
      <Button title={title} onPress={onPress} color={Colors.white} />
    </View>
  );
};

export default CommonButton;
