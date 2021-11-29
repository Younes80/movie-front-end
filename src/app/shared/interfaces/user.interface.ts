export interface User {
  id: number | null;
  username: string;
  email: string;
  password: string;
  favorite?: any;
  token: string | null;
}
