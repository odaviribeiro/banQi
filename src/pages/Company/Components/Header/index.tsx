import React, { useCallback, useMemo } from "react";
import { NavigationPagesProps } from "@/routes";
import RouterNames from "@/routes/Internal";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import Input from "@/components/Input";
import { useDispatch } from "react-redux";
import { companyDeleteReduce } from "@/store/redux/Actions";

interface IHeader {
  onChangeText: (value: string) => void;
}

const Header: React.FC<IHeader> = ({ onChangeText }) => {
  const { navigate } = useNavigation<NavigationPagesProps>();
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    dispatch(companyDeleteReduce());
    navigate(RouterNames.NewCompany);
  }, [navigate]);

  const buttomNewCompany = useMemo(
    () => (
      <TouchableWithoutFeedback onPress={onPress}>
        <Text>Nova Empresa</Text>
      </TouchableWithoutFeedback>
    ),
    []
  );

  return (
    <View style={{ paddingHorizontal: 30 }}>
      {buttomNewCompany}
      <Input
        onChangeText={(value) => onChangeText(value)}
        placeholder="Pesquisa"
        autoCapitalize="none"
      />
    </View>
  );
};

export default Header;
