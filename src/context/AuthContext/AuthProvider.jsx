import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (username) => {
    const token = `fake-token-${username}`;
    localStorage.setItem('authToken', token);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  useEffect(() => {
    const user = localStorage.getItem('authToken');
    setUser(user);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
