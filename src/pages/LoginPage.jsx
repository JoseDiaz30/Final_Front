import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard'); // Redirigir al dashboard tras login
    } catch (error) {
      alert('Error al iniciar sesión: ' + (error.response?.data?.message || 'Error'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
       <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Email</label>
           <input
            type="email" 
             className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Email" 
               onChange={(e) => setEmail(e.target.value)} 
                required/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">Contraseña</label>
           <input 
            type="password" 
             className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="********" 
               onChange={(e) => setPassword(e.target.value)} 
                required/>
        </div>
         <button 
         type="submit"
         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
          Entrar
         </button>
       </form>
        <p className="mt-4 text-center text-sm text-gray-600">
         ¿No tienes cuenta? {' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
           Regístrate
          </Link>
        </p>
    </div>
  </div>
  );
};


export default LoginPage;
