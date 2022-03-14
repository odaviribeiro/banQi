import React from "react";
import { GestureResponderEvent } from "react-native";
import { ButtomForm, IButtomStyled } from "../index.style";
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
    <ButtomForm>
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
    </ButtomForm>
  );
};

export default ButtomComponet;
