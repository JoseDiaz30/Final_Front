import { useState, useCallback } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthProvider';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const fetchItems = useCallback(async (signal) => {
    try {
      const config = signal ? { signal } : {};
      const { data } = await api.get('/items', config);
      setItems(data);
    } catch (error) {
      if (error?.name === 'CanceledError' || error?.message ==='canceled') return; // Petición abortada
      console.error("Error cargando items", error);
    }
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post('/items', { name: newItem, description: 'Descripción genérica' });
      setNewItem('');
      fetchItems(); // Recargar lista
    } catch (err) {
      console.error("Error al crear", err);
      alert("Error al crear item");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este item?")) return;    
    try {
      await api.delete(`/items/${id}`);
      fetchItems(); // Recargar lista tras eliminar
    } catch (err) {
      console.error("Error al eliminar", err);
      alert("Error al eliminar item");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div  className="flex justify-between h-16 items-center">
           <h1 className="text-xl font-bold text-blue-600">Mi APP</h1>
            <div className="flex items-center gap-4">
             <span className="text-gray-700">Hola, <span className="font-semibold">{user.username}</span></span>
              <button 
                onClick={logout} 
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
         </div>
        </nav>
          <main className="max-w-4xl mx-auto mt-10 p-4">
           <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Agregar Nuevo Item</h2>
             <form onSubmit={handleCreate} className="flex gap-4">
              <input 
               value={newItem} 
               onChange={(e) => setNewItem(e.target.value)} 
               placeholder="Nuevo Item" 
               className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
               type="submit"
               className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
              >
              Agregar
              </button>
             </form>
            </div>
             <div className="space-y-4">
              {items.length === 0 ? (
               <p className="text-center text-gray-500">No hay items aún. ¡Agrega uno!</p>
                ) : (
                items.map((item) => (
                 <div key={item._id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border-l-4 border-blue-500 hover:shadow-md transition">
                  <div>
                   <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                <button 
                 onClick={() => handleDelete(item._id)} 
                 className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition"
                 title="Eliminar"
                 >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                 </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;