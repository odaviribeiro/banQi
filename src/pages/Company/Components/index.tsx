import { FlatListRender } from "@/interfaces/FlatList";
import { AxiosError } from "axios";
import React, { useCallback, useEffect } from "react";
import { FlatList, Text } from "react-native";
import { ICompany } from "../Interface";

interface IItem {
  item: ICompany;
}

const Item: React.FC<IItem> = ({ item }) => {
  const { name, createdAt } = item;
  return <Text>{name}</Text>;
};

export default Item;
