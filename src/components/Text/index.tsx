import React, { ReactNode } from "react";
import Text, { IText } from "./index.style";

interface ITextC extends IText {
  children: ReactNode;
}

const Item: React.FC<ITextC> = (props) => {
  const { children } = props;
  return <Text {...props}>{children}</Text>;
};

export default Item;
