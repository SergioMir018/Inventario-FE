import { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextType {
  role: string;
  isAdmin: boolean;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedRole && storedIsAdmin) {
      setRole(JSON.parse(storedRole));
      setIsAdmin(JSON.parse(storedIsAdmin) === true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('role', JSON.stringify(role));
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }, [role, isAdmin]);

  return (
    <AuthContext.Provider
      value={{
        role,
        isAdmin,
        setRole,
        setIsAdmin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
