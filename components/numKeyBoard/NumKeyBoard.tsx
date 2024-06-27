import { View, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/build/Feather";
import ThemedText from "../ThemedText";

type NumKeyBoardProps = {
  handlePress: (val: string) => void;
  handleDelete: () => void;
};

const NumKeyBoard = ({ handlePress, handleDelete }: NumKeyBoardProps) => {
  return (
    <>
      <View className="gap-8">
        <TouchableOpacity className="" onPress={() => handlePress("1")}>
          <ThemedText className="text-[28px] font-bold">1</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("4")}>
          <ThemedText className="text-[28px] font-bold">4</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("7")}>
          <ThemedText className="text-[28px] font-bold">7</ThemedText>
        </TouchableOpacity>
      </View>
      <View className="gap-8">
        <TouchableOpacity className="" onPress={() => handlePress("2")}>
          <ThemedText className="text-[28px] font-bold">2</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("5")}>
          <ThemedText className="text-[28px] font-bold">5</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("8")}>
          <ThemedText className="text-[28px] font-bold">8</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("0")}>
          <ThemedText className="text-[28px] font-bold">0</ThemedText>
        </TouchableOpacity>
      </View>
      <View className="gap-8">
        <TouchableOpacity className="" onPress={() => handlePress("3")}>
          <ThemedText className="text-center text-[28px] font-bold">
            3
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("6")}>
          <ThemedText className="text-center text-[28px] font-bold">
            6
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => handlePress("9")}>
          <ThemedText className="text-center text-[28px] font-bold">
            9
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} className="">
          <Feather name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NumKeyBoard;
