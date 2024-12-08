export interface User {
  _id: string;
  email: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  address?: string;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<any>;
  register: (email: string, password: string, username: string) => Promise<any>;
  logout: () => void;
} 