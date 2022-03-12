import React, { ReactNode } from "react";
import { IBox } from "./index.d";
import Box from "./index.style";

interface IBoxProps extends IBox {
  children?: ReactNode;
}

const BoxComponent = (props: IBoxProps) => {
  const { children } = props;
  return <Box {...props}>{children}</Box>;
};

export default BoxComponent;
