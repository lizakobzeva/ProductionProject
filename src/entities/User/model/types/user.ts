export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  likedPosts: string[];
}
export interface UserShema {
  authData?: User;
}
