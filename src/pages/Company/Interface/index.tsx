interface IAddress {
  city: string;
  complement?: string;
  neighborhood: string;
  number: string;
  state: string;
  street: string;
  zip: string;
}

export interface ICompany {
  address: IAddress;
  cnpj: string;
  createdAt?: Date | string;
  description: string;
  id?: string;
  logo: string;
  name: string;
  revenue?: number;
}
