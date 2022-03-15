import React from "react";
import Text from "@/components/Text";
import theme from "@/theme";
import { View } from "react-native";
import { cnpjRegex } from "@/utils/Regex/Cnpj";

interface ITextBody {
  name: string;
  description: string;
  cnpj: string;
}

const TextBody: React.FC<ITextBody> = ({ name, description, cnpj }) => {
  return (
    <View style={{ flex: 1, marginLeft: 16 }} testID="testTextBody">
      <Text fontWeight="700" color={theme.colors.gray}>
        {name}
      </Text>
      <Text color={theme.colors.gray} fontSize="15px">
        {description}
      </Text>
      <Text color={theme.colors.gray} fontSize="15px">
        {`CNPJ: ${cnpjRegex(cnpj)}`}
      </Text>
    </View>
  );
};

export default TextBody;
