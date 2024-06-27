import { useState, useEffect, useCallback } from "react";
import {
  View,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Text,
} from "react-native";
import { useTranslation } from "react-i18next";
import { EvilIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useQuery } from "@tanstack/react-query";
import { useFetch } from "@/hooks/useFetch";
import { debounce } from "lodash";
import SearchItems from "@/components/search/SearchItems";

const Search = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedText(value);
    }, 300),
    [],
  );

  useEffect(() => {
    debouncedSearch(text);
  }, [text, debouncedSearch]);

  const { data, isLoading, error, isFetched } = useQuery({
    queryKey: ["posts", debouncedText],
    queryFn: () =>
      useFetch(debouncedText ? `?title_like=${debouncedText}` : ""),
  });

  return (
    <ScrollView className="min-h-screen bg-background">
      <View className="relative mx-4 pb-[79px] pt-12">
        <Text
          style={{ fontFamily: "Inter" }}
          className="mb-6 text-[22px] font-bold"
        >
          {t("Search")}
        </Text>
        <TextInput
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder={t("searchProducts")}
          placeholderTextColor={Colors.backBtn}
          className="mb-3 rounded-[16px] border border-secondary-grey/50 py-4 pl-10 text-[15px] text-secondary-grey"
        />

        <View className="absolute left-3 top-[114px]">
          <EvilIcons name="search" size={24} color={Colors.backBtn} />
        </View>

        {isLoading && <ActivityIndicator />}

        {error && <Text style={{ fontFamily: "Inter" }}>{t("error")}</Text>}

        {!isLoading && data?.length === 0 && (
          <Text
            style={{ fontFamily: "Inter" }}
            className="pt-4 text-center text-[18px] text-secondary-grey"
          >
            {t("noProducts")}
          </Text>
        )}

        {!isLoading && data && <SearchItems data={data} />}
      </View>
    </ScrollView>
  );
};

export default Search;
