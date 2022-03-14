import React, { useCallback, useMemo } from "react";
import RouterNames from "@/routes";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import theme from "@/theme";
import ButtomText from "@/components/Buttom/ButtomText";
import InputSearch from "@/components/Input/InputSearch";
import { companyDeleteReduce } from "@/store/redux/Company/Actions";

interface IHeader {
  onChangeText: (value: string) => void;
}

const Header: React.FC<IHeader> = ({ onChangeText }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    dispatch(companyDeleteReduce());
    navigate(RouterNames.NewCompany as never);
  }, [navigate]);

  const buttomNewCompany = useMemo(
    () => (
      <ButtomText color={theme.colors.white} onPress={onPress}>
        Nova Empresa
      </ButtomText>
    ),
    []
  );

  return (
    <View style={{ paddingHorizontal: 16 }}>
      {buttomNewCompany}
      <InputSearch onChangeText={(value) => onChangeText(value)} />
    </View>
  );
};

export default Header;
