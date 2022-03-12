import Text from "@/components/Text";
import { NavigationPagesProps } from "@/routes";
import { companyReduce } from "../../../store/redux/Actions";
import theme from "@/theme";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch } from "react-redux";
import { ICompany } from "../Interface";
import Card from "@/components/Card";

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
      navigate("NewCompany");
    },
    [dispatch]
  );

  return (
    <TouchableWithoutFeedback onPress={() => onPress(item)}>
      <Card>
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
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default Item;
