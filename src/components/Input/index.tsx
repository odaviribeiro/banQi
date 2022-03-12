import theme from "@/theme";
import React, { ReactNode } from "react";
import { TextInputProps } from "react-native";
import Text from "../Text";
import Input, { IInput } from "./index.style";

interface ITextC extends TextInputProps, IInput {
  children?: ReactNode;
  msgErro?: string;
}

const InputComponent: React.FC<ITextC> = (props) => {
  const { error, msgErro } = props;
  return (
    <>
      <Input {...props} />
      {error && <Text color={theme.colors.red}>{msgErro}</Text>}
    </>
  );
};

export default InputComponent;
