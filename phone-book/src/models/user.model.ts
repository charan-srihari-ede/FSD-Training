interface IAddress {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: any;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  website: string;
  address: IAddress;
  company: ICompany;
}
