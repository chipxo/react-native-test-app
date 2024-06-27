import { View, TouchableOpacity, Text } from "react-native";
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
        {[1, 4, 7].map((val) => (
          <TouchableOpacity
            key={val}
            onPress={() => handlePress(val.toString())}
          >
            <Text
              style={{ fontFamily: "Inter" }}
              className="text-[28px] font-bold"
            >
              {val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="gap-8">
        {[2, 5, 8, 0].map((val) => (
          <TouchableOpacity
            key={val}
            onPress={() => handlePress(val.toString())}
          >
            <Text
              style={{ fontFamily: "Inter" }}
              className="text-[28px] font-bold"
            >
              {val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="gap-8">
        {[3, 6, 9].map((val) => (
          <TouchableOpacity
            key={val}
            onPress={() => handlePress(val.toString())}
          >
            <Text
              style={{ fontFamily: "Inter" }}
              className="text-[28px] font-bold"
            >
              {val}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={handleDelete} className="">
          <Feather name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NumKeyBoard;
