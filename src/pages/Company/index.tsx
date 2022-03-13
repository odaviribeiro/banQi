import InnerPage from "@/components/InnerPage";
import { FlatListRender } from "@/interfaces/FlatList";
import { AxiosError } from "axios";
import React, { useCallback, useEffect } from "react";
import { FlatList } from "react-native";
import Item from "./Components";
import Header from "./Components/Header";
import { ICompany } from "./Interface";
import { getCompanies } from "./Services";

const Company: React.FC = () => {
  const [originalData, setOriginalData] = React.useState<ICompany[]>([]);
  const [data, setData] = React.useState<ICompany[]>([]);

  const response = useCallback(async () => {
    await getCompanies()
      .then((res) => {
        setOriginalData(res.data);
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

  const search = (value: string) => {
    setData(
      [...originalData].filter(
        (item) => item.name.includes(value) || item.cnpj.includes(value)
      )
    );
  };

  return (
    <InnerPage disabledScrollView>
      <Header onChangeText={(value) => search(value)} />

      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{ paddingHorizontal: 30, marginBottom: 30 }}
        scrollEventThrottle={32}
        renderItem={renderItem}
      />
    </InnerPage>
  );
};

export default Company;
