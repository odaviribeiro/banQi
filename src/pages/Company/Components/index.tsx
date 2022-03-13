import Text from "@/components/Text";
import { NavigationPagesProps } from "@/routes";
import { companyReduce } from "../../../store/redux/Actions";
import theme from "@/theme";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch } from "react-redux";
import { ICompany } from "../Interface";
import RouterNames from "@/routes/Internal";
import Box from "@/components/Card/index.style";

interface IItem {
  item: ICompany;
}

const Item: React.FC<IItem> = ({ item }) => {
  const { name, description } = item;
  const { navigate } = useNavigation<NavigationPagesProps>();

  const dispatch = useDispatch();

  const onPress = useCallback(
    (value: ICompany) => {
      dispatch(companyReduce(value));
      navigate(RouterNames.NewCompany);
    },
    [dispatch]
  );

  return (
    <TouchableWithoutFeedback onPress={() => onPress(item)}>
      <Box
        style={{
          backgroundColor: theme.colors.white,
          shadowColor: theme.colors.secondary,
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
    </TouchableWithoutFeedback>
  );
};

export default Item;
