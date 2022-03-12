import { FlatListRender } from "@/interfaces/FlatList";
import { AxiosError } from "axios";
import React, { useCallback, useEffect } from "react";
import { FlatList, View } from "react-native";
import Item from "./Components";
import { ICompany } from "./Interface";
import { getCompanies } from "./Services";

const Company: React.FC = () => {
  const [data, setData] = React.useState<ICompany[]>([]);

  const response = useCallback(async () => {
    await getCompanies()
      .then((res) => {
        setData(res.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.data);
      });
  }, []);

  useEffect(() => {
    response();
  }, [response]);

  const renderItem = useCallback(({ item }: FlatListRender<ICompany>) => {
    return <Item item={item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: ICompany) => String(item.createdAt),
    []
  );

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      onEndReachedThreshold={0.1}
      contentContainerStyle={{ padding: 10 }}
      scrollEventThrottle={32}
      renderItem={renderItem}
    />
  );
};

export default Company;
