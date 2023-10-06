import React from "react";
import { Searchbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { FilterContainer, SearchContainer } from "./styles";
import {} from "react-native";

export const Search = () => {
  return (
    <SearchContainer>
      <Searchbar
        showDivider={false}
        style={{ backgroundColor: "#F4F6F9", flex: 1 }}
        placeholder="Buscar"
      />
      <FilterContainer>
        <MaterialIcons name="filter-list" size={24} color="#fff" />
      </FilterContainer>
    </SearchContainer>
  );
};
