export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
};

export type Address = {
  geo: Geo;
};

export type Geo = {
  lat: string;
  lng: string;
};
