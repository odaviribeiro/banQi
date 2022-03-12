import React, { ReactNode } from "react";
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";
import Buttom, { IButtomStyled } from "./index.style";

interface IButtom extends TouchableWithoutFeedbackProps, IButtomStyled {
  children?: ReactNode;
  testID?: string;
}

const ButtomComponet: React.FC<IButtom> = (props) => {
  const { children } = props;
  return (
    <TouchableWithoutFeedback {...props}>
      <Buttom {...props}>{children}</Buttom>
    </TouchableWithoutFeedback>
  );
};

export default ButtomComponet;
