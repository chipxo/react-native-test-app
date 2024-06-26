import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/build/Feather";

type NumKeyBoardProps = {
  handlePress: (val: string) => void;
  handleDelete: () => void;
};

const NumKeyBoard = ({ handlePress, handleDelete }: NumKeyBoardProps) => {
  return (
    <>
      <View className="gap-8">
        <TouchableOpacity className="" onPress={() => handlePress("1")}>
          <Text className="text-[28px] font-bold">1</Text>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("4")}>
          <Text className="text-[28px] font-bold">4</Text>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("7")}>
          <Text className="text-[28px] font-bold">7</Text>
        </TouchableOpacity>
      </View>
      <View className="gap-8">
        <TouchableOpacity className="" onPress={() => handlePress("2")}>
          <Text className="text-[28px] font-bold">2</Text>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("5")}>
          <Text className="text-[28px] font-bold">5</Text>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("8")}>
          <Text className="text-[28px] font-bold">8</Text>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("0")}>
          <Text className="text-[28px] font-bold">0</Text>
        </TouchableOpacity>
      </View>
      <View className="gap-8">
        <TouchableOpacity className="" onPress={() => handlePress("3")}>
          <Text className="text-center text-[28px] font-bold">3</Text>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("6")}>
          <Text className="text-center text-[28px] font-bold">6</Text>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("9")}>
          <Text className="text-center text-[28px] font-bold">9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} className="">
          <Feather name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NumKeyBoard;
