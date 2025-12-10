import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;
  
  // Si no hay usuario, redirigir a login
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;