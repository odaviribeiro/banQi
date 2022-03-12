import { AxiosError } from "axios";
import { useCallback, useEffect } from "react";
import { getCompanies } from "./Services";

const Company: React.FC = () => {
  const response = useCallback(async () => {
    await getCompanies()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.data);
      });
  }, []);

  useEffect(() => {
    response();
  }, [response]);

  return <></>;
};

export default Company;
