import { IUser } from './User';

export interface ILoginResponse {
  jwt: string;
  user: IUser;
}
