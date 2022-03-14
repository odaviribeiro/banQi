import theme from "@/theme";
import React from "react";
import { View } from "react-native";
import { IAddress } from "../../Interface";
import Text from "@/components/Text/index.style";
import { cepRegex } from "@/utils/Regex/Cep";

interface IItem {
  address: IAddress;
}

const Address: React.FC<IItem> = ({ address }) => {
  const { street, number, neighborhood, city, state, zip } = address;

  return (
    <View style={{ marginTop: 10, alignItems: "center" }}>
      <Text fontSize="14px" color={theme.colors.gray}>
        {`${street}, ${number} - ${neighborhood}`}
      </Text>
      <Text fontSize="14px" color={theme.colors.gray}>
        {`${city}/${state} - CEP: ${cepRegex(zip)}`}
      </Text>
    </View>
  );
};

export default Address;
