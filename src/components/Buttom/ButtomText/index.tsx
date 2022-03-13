import React, { ReactNode } from "react";
import Text from "../../Text";
import Buttom, { IButtom } from "..";
import { IText } from "../../Text/index.style";

interface IButtomText extends IButtom, IText {
  children: ReactNode;
}

const ButtomText: React.FC<IButtomText> = (props) => {
  const { children } = props;
  return (
    <Buttom {...props}>
      <Text {...props}>{children}</Text>
    </Buttom>
  );
};

export default ButtomText;
