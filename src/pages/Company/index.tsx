import InnerPage from "@/components/InnerPage";
import Input from "@/components/Input";
import { FlatListRender } from "@/interfaces/FlatList";
import { NavigationPagesProps } from "@/routes";
import { companyDeleteReduce } from "@/store/redux/Actions";
import { useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import React, { useCallback, useEffect } from "react";
import { FlatList, Text, TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import Item from "./Components";
import { ICompany } from "./Interface";
import { getCompanies } from "./Services";

const Company: React.FC = () => {
  const [originalData, setOriginalData] = React.useState<ICompany[]>([]);
  const [data, setData] = React.useState<ICompany[]>([]);
  const { navigate } = useNavigation<NavigationPagesProps>();
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(companyDeleteReduce());
  }, [dispatch]);

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
      <TouchableWithoutFeedback onPress={() => navigate("NewCompany")}>
        <Text>Nova Empresa</Text>
      </TouchableWithoutFeedback>
      <Input onChangeText={(value) => search(value)} placeholder="Pesquisa" />

      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.1}
        scrollEventThrottle={32}
        renderItem={renderItem}
      />
    </InnerPage>
  );
};

export default Company;
