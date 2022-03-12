import React from "react";
import { Image, Text, View } from "react-native";
import { ICompany } from "../Interface";
import Box from "./index.style";

interface IItem {
  item: ICompany;
}

const Item: React.FC<IItem> = ({ item }) => {
  const { name, description } = item;
  return (
    <Box
      style={{
        backgroundColor: "white",
        shadowColor: " #000",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 50 }}
        source={{
          uri: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
        }}
        width={80}
        height={80}
      />
      <View style={{ flex: 1, marginLeft: 40 }}>
        <Text style={{ fontSize: 22, fontWeight: "600", color: "#525252" }}>
          {name}
        </Text>
        <Text style={{ color: "#b1b1b1" }}>{description}</Text>
      </View>
    </Box>
  );
};

export default Item;
