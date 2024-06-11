export interface User {
  id: string;
  name: string;
  avatar: string;
}
export interface UserShema {
  authData?: User;
}
