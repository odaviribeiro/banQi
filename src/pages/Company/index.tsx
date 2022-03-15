import React, { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import InnerPage from "@/components/InnerPage";
import { FlatListRender } from "@/interfaces/FlatList";
import { AxiosError } from "axios";
import Item from "./Components/Item";
import Header from "./Components/Header";
import { ICompany } from "./Interface";
import { getCompanies } from "./Services";
import { useSelector } from "react-redux";
import { StateRedux } from "@/store";
import { IDataCompany } from "@/store/redux/Company/Reducers";
import useSplashLoading from "@/hooks/SplashLoading";

const Company: React.FC = () => {
  const [originalData, setOriginalData] = useState<ICompany[]>([]);
  const [data, setData] = useState<ICompany[]>([]);
  const { setLoadingState } = useSplashLoading();

  const dataCompany = useSelector<StateRedux, IDataCompany>(
    (state) => state.data
  );

  const response = useCallback(async () => {
    setLoadingState("loading");
    await getCompanies()
      .then((res) => {
        setOriginalData(res.data);
        setData(res.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.data);
      })
      .finally(() => {
        setLoadingState("idle");
      });
  }, [setLoadingState]);

  useEffect(() => {
    response();
  }, [response, dataCompany.loading]);

  const renderItem = useCallback(({ item }: FlatListRender<ICompany>) => {
    return <Item item={item} />;
  }, []);

  const keyExtractor = useCallback((item: ICompany) => String(item.id), []);

  const search = (value: string) => {
    setData(
      [...originalData].filter(
        (item) =>
          item.name.includes(value) ||
          item.cnpj.includes(value) ||
          item.address.city.includes(value) ||
          item.address.state.includes(value) ||
          item.address.zip.includes(value)
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
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 20,
        }}
        scrollEventThrottle={32}
        renderItem={renderItem}
      />
    </InnerPage>
  );
};

export default Company;
