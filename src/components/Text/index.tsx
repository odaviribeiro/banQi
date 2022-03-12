import React, { ReactNode } from "react";
import Text, { IText } from "./index.style";

interface ITextC extends IText {
  children: ReactNode;
  testID?: string;
}

const Item: React.FC<ITextC> = (props) => {
  const { children, testID } = props;
  return (
    <Text {...props} testID={testID || "textTest"}>
      {children}
    </Text>
  );
};

export default Item;
