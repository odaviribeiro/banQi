import Text from "@/components/Text";
import theme from "@/theme";
import React from "react";
import { Image, View } from "react-native";
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
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.black,
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
        <Text>{name}</Text>
        <Text color={theme.colors.textSecundary}>{description}</Text>
      </View>
    </Box>
  );
};

export default Item;
