/* eslint-disable react/jsx-no-constructed-context-values */
import { IUser } from '@/interfaces/User';
import api from '@/services/api';
import { addTokenToCookies, clearTokenCookie } from '@/utils/cookies';
import handleError from '@/utils/handleToast';
import { useRouter } from 'next/router';
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IUserProvider {
  user: IUser;
  setUser: React.Dispatch<SetStateAction<IUser>>;
  isAuthenticated: boolean;
  logout: () => void;
  getUser: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const dataUser = localStorage.getItem('@MultCapWeb: user');

    if (dataUser) {
      setUser(JSON.parse(dataUser));
      addTokenToCookies(localStorage.getItem('@MultCapWeb: accessToken') || '');
    }
    setLoading(false);
  }, []);

  const isAuthenticated = !!user.id;

  const logout = () => {
    localStorage.removeItem('@MultCapWeb: user');
    localStorage.removeItem('@MultCapWeb: accessToken');
    localStorage.removeItem('@MultCapWeb: refreshToken');
    clearTokenCookie();
    setUser({} as IUser);
    router.push('/');
  };

  const getUser = async () => {
    try {
      const { data } = await api.get<IUser>('/users/me');

      setUser(data);

      localStorage.setItem('@MultCapWeb: user', JSON.stringify(data));
    } catch (error) {
      handleError(error);
    }
  };

  if (loading) {
    return null;
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider
      value={{ user, getUser, setUser, isAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
