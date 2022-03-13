import React from "react";
import { Image } from "react-native";

interface IProps {
  uri: string;
}

const ImageComponent: React.FC<IProps> = ({ uri }) => {
  return (
    <Image
      style={{ width: 50, height: 50, borderRadius: 50 }}
      source={{
        uri,
      }}
      width={80}
      height={80}
    />
  );
};

export default ImageComponent;
