import React from "react";
import Text from "@/components/Text";
import theme from "@/theme";
import { View } from "react-native";

interface ITextBody {
  name: string;
  description: string;
}

const TextBody: React.FC<ITextBody> = ({ name, description }) => {
  return (
    <View style={{ flex: 1, marginLeft: 24 }} testID="testTextBody">
      <Text>{name}</Text>
      <Text color={theme.colors.textSecundary}>{description}</Text>
    </View>
  );
};

export default TextBody;
