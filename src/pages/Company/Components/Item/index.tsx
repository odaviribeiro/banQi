import theme from "@/theme";
import { useNavigation } from "@react-navigation/native";
import React, { memo, useCallback } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { useDispatch } from "react-redux";
import { ICompany } from "../../Interface";
import RouterNames from "@/routes";
import Card from "@/components/Card/index.style";
import TextBody from "../TextBody";
import Image from "../Image";
import { companyReduce } from "@/store/redux/Company/Actions";
import Address from "../Anddress";

interface IItem {
  item: ICompany;
}

const Item: React.FC<IItem> = ({ item }) => {
  const { name, description, address, cnpj, logo } = item;
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  const onPress = useCallback(
    (value: ICompany) => {
      dispatch(companyReduce(value));
      navigate(RouterNames.NewCompany as never);
    },
    [dispatch, navigate]
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
        <View style={{ flexDirection: "row" }}>
          <Image uri={logo} />
          <TextBody name={name} description={description} cnpj={cnpj} />
        </View>
        <Address address={address} />
      </Card>
    </TouchableWithoutFeedback>
  );
};

export default memo(Item);
