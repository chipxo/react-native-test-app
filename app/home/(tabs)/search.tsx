import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useTranslation } from "react-i18next";
import { EvilIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { debounce } from "lodash";

const Search = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedText(value);
    }, 300), // Adjust the debounce delay as needed
    []
  );

  useEffect(() => {
    debouncedSearch(text);
  }, [text, debouncedSearch]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", debouncedText],
    queryFn: () =>
      useFetch(debouncedText ? `?title_like=${debouncedText}` : ""),
    // Only fetch data when there's a search query
  });

  return (
    <ScrollView className="bg-background min-h-screen">
      <View className="pt-12 mx-4 relative pb-[79px]">
        <Text className="text-[22px] font-bold mb-6">{t("Search")}</Text>
        <TextInput
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder={t("searchProducts")}
          placeholderTextColor={Colors.backBtn}
          className="border border-secondary-grey/50 rounded-[16px] py-4 pl-10 text-[15px] text-secondary-grey mb-3"
        />

        <View className="absolute left-3 top-[114px]">
          <EvilIcons name="search" size={24} color={Colors.backBtn} />
        </View>

        {isLoading && <ActivityIndicator />}

        {error && <Text>An error occurred</Text>}

        {!isLoading && data?.length === 0 && (
          <Text className="text-secondary-grey text-center text-[18px] pt-10">
            No results found!
          </Text>
        )}

        {!isLoading && data && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View className="bg-white w-full rounded-[16px] p-4 mb-2">
                <Text className="font-semibold text-[15px]">ID: {item.id}</Text>
                <Text>Name: {item.title}</Text>
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Search;
