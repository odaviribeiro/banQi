import React from "react";
import Input from "..";
import { InputProps } from "../index.d";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import theme from "@/theme";

const InputSearch: React.FC<InputProps> = (props) => {
  return (
    <View>
      <Input
        {...props}
        pr="44px"
        placeholder="Pesquisar"
        autoCapitalize="none"
      />
      <Ionicons
        name="search"
        size={30}
        color={theme.colors.textSecundary}
        style={{
          position: "absolute",
          width: 30,
          zIndex: 2,
          alignSelf: "flex-end",
          right: 10,
          marginTop: 17,
        }}
      />
    </View>
  );
};

export default InputSearch;
