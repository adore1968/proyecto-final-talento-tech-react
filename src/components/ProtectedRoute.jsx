import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext/useAuthContext';

function ProtectedRoute({ children }) {
  const { loading, user } = useAuthContext();

  if (loading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
}

export default ProtectedRoute;
