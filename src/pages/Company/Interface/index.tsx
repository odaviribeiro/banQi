interface IAddress {
  city: string;
  complement?: string;
  neighborhood: string;
  number: number;
  state: string;
  street: string;
  zip: number;
}

export interface ICompany {
  address: IAddress;
  cnpj: string;
  createdAt?: Date;
  description: string;
  logo: string;
  name: string;
  revenue: number;
}
