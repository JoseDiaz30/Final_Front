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
    try {
      await api.delete(`/items/${id}`);
      fetchItems(); // Recargar lista tras eliminar
    } catch (err) {
      console.error("Error al eliminar", err);
      alert("Error al eliminar item");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {user?.username ? (
        <div>
          <h1>Bienvenido, {user.username}</h1>
          <button onClick={logout} style={{ background: 'red', color: 'white' }}>Cerrar Sesión</button>
        </div>
      ) : (
        <h2>Cargando...</h2>
      )}
      <hr />

      <h3>Mis Items</h3>
      <form onSubmit={handleCreate}>
        <input 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)} 
          placeholder="Nuevo Item" 
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item._id} style={{ margin: '10px 0' }}>
            {item.name} 
            <button onClick={() => handleDelete(item._id)} style={{ marginLeft: '10px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;