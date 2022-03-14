import React, { ReactNode } from "react";
import { Box, BoxScrollView } from "./index.style";

interface InnerPageI {
  children: ReactNode;
  disabledScrollView?: boolean;
}

const InnerPage: React.FC<InnerPageI> = (props) => {
  const { children, disabledScrollView } = props;

  if (disabledScrollView) {
    return <Box testID="testInnerPageDisabledScrollView">{children}</Box>;
  }

  return <BoxScrollView testID="testInnerPage">{children}</BoxScrollView>;
};

export default InnerPage;
