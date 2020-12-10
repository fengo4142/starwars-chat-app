export interface IUser {
  email: string;
  displayName: string;
  photoURL: string;
  password: string;
}

export interface IChat {
  id: string,
  message: string,
  email: string,
  user: string,
  photoURL: string,
  timestamp: number
}