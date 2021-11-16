export interface User {
  id: number | null;
  username: string;
  email: string;
  password: string;
  token: string | null;
}
