import React, { ReactNode } from "react";
import { ScrollView, View } from "react-native";

interface InnerPageI {
  children: ReactNode;
  disabledScrollView?: boolean;
}

const InnerPage: React.FC<InnerPageI> = (props) => {
  const { children, disabledScrollView } = props;

  if (disabledScrollView) {
    return <View style={{ flex: 1, paddingTop: 20 }}>{children}</View>;
  }

  return (
    <ScrollView style={{ paddingHorizontal: 30, flex: 1, paddingTop: 20 }}>
      {children}
    </ScrollView>
  );
};

export default InnerPage;
