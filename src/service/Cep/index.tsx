import { Cep } from "./Interface";
import { http } from "./service";

const URL: string = "https://viacep.com.br/ws";

export const getCep = (cep: string) => {
  return http.get<Cep>(`${URL}/${cep}/json`);
};
