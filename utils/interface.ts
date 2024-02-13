import { HTTP } from "./enum";

export interface iError {
  name: string;
  message: string;
  status: HTTP;
  success: boolean;
}

export interface iAnon {
  user: {};
  message: Array<string>;
}
export interface iAnonB {
  name: string;
  messageGrab: Array<{}>;
  link: string;
  token: string;
}
