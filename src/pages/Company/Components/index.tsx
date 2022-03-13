import { NavigationPagesProps } from "@/routes";
import { companyReduce } from "../../../store/redux/Actions";
import theme from "@/theme";
import { useNavigation } from "@react-navigation/native";
import React, { memo, useCallback } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { ICompany } from "../Interface";
import RouterNames from "@/routes/Internal";
import Card from "@/components/Card/index.style";
import TextBody from "./TextBody";
import Image from "./Image";

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
      <Card
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
          uri={
            "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg"
          }
        />
        <TextBody name={name} description={description} />
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default memo(Item);
