import React, { ReactNode } from "react";
import { ScrollView } from "react-native";

interface InnerPageI {
  children: ReactNode;
  disabledScrollView?: boolean;
}

const InnerPage: React.FC<InnerPageI> = (props) => {
  const { children, disabledScrollView } = props;

  if (disabledScrollView) {
    return <>{children}</>;
  }

  return <ScrollView style={{ paddingHorizontal: 30 }}>{children}</ScrollView>;
};

export default InnerPage;
