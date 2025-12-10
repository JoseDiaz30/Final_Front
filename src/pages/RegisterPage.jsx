import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(username, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrarse');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
       <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Crear Cuenta</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} 
         <form onSubmit={handleSubmit} className="space-y-4">
          <div>
           <label className="block text-sm font-medium text-gray-600">Nombre de Usuario</label>
            <input 
            type="text" 
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Usuario"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
             required/>
          </div>
          <div>
           <label className="block text-sm font-medium text-gray-600">Email</label>
            <input 
            type="email" 
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="tu@email.com"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Contraseña</label>
             <input 
             type="password" 
             className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
             placeholder="********" 
             value={password}
             onChange={(e) => setPassword(e.target.value)} 
             required/>
          </div>
        <button 
         type="submit"
         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
         >
        Registrarse
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        ¿Ya tienes cuenta? {' '} 
         <Link to="/login" className="text-blue-600 hover:underline font-medium">
          Ingresa aquí
         </Link>
      </p>
    </div>
  </div>
  );
};

export default RegisterPage;