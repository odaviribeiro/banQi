import React from "react";
import { GestureResponderEvent, View } from "react-native";
import { IButtomStyled } from "../index.style";
import Text from "../../Text";
import Buttom from "..";
import theme from "@/theme";
import { useNavigation } from "@react-navigation/native";

interface IButtom extends IButtomStyled {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const ButtomComponet: React.FC<IButtom> = (props) => {
  const { onPress } = props;
  const { goBack } = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <Buttom onPress={goBack} w="46%" bg={theme.colors.white}>
        <Text fontSize={"20px"} color={theme.colors.primary}>
          Cancelar
        </Text>
      </Buttom>

      <Buttom onPress={onPress} w="46%">
        <Text fontSize={"20px"} color={theme.colors.white}>
          Enviar
        </Text>
      </Buttom>
    </View>
  );
};

export default ButtomComponet;
