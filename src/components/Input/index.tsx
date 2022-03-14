import React from "react";
import theme from "@/theme";
import Text from "../Text";
import { InputProps } from "./index.d";
import Input from "./index.style";

const InputComponent: React.FC<InputProps> = (props) => {
  const { error, msgErro } = props;
  return (
    <>
      <Input {...props} />
      {error && <Text color={theme.colors.red}>{msgErro}</Text>}
    </>
  );
};

export default InputComponent;
