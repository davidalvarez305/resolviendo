import React, {createContext} from 'react';
import useIsAuth from '../hooks/useIsAuth';

export const AuthContext = createContext<any>(null);

const AuthProvider: React.FC = ({children}) => {
  const { isLoggedIn, Login, Logout } = useIsAuth();
  return (
    <AuthContext.Provider value={{ isLoggedIn, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
