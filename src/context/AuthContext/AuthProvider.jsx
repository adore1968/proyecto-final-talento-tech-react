import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (name, password) => {
    if (name === 'admin' && password === '1234') {
      const session = { name };
      setUser(session);
      sessionStorage.setItem('session', JSON.stringify(session));
    }
  };

  const logout = () => {
    sessionStorage.removeItem('session');
    setUser(null);
  };

  useEffect(() => {
    const user = sessionStorage.getItem('session');
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ loading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
