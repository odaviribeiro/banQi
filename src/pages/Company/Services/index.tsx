import { http } from "../../../service";
//import { ISettingIndex } from './Interface';
//import Response, { Request } from 'Interface/Response';
//import { request } from 'Utils/Function/Request';

const URl = "/companies";

export const getCompanies = () => {
  return http.get<any>(URl);
};

// export const postSettingIndex = (value: ISettingIndex) => {
//     return http.post<Request<ISettingIndex>>(`${URl}`, request(value));
// };

// export const putSettingIndex = (value: ISettingIndex) => {
//     return http.put<Request<ISettingIndex>>(`${URl}/${value.guidcontrol}`, request(value));
// };

// export const deletSettingIndex = (value: ISettingIndex) => {
//     return http.delete<ISettingIndex>(`${URl}/${value.guidcontrol}`);
// };
