/// <reference types="vite/client" />
declare module "swiper";
declare module "aos";
declare module "react-router-hash-link";

interface BotCardDetails {
  id: string;
  name: string;
}

type UserDetails = {
  _id?: string
  username: string;
  email: string;
  password: string;
  role: string
  data: Object[]
}

type User = {
  access_token: string;
  user: UserDetails
}

type State = {
  userDetails: User | null;
  isUserLoggedIn: boolean;
  isAdmin: boolean;
  botList: BotCardDetails[];
};

type Action = {
  type: string;
  payload: any;
};
