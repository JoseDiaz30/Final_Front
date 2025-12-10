import axios from 'axios';

async function fetchData() {
  try {
    const resp = await axios.get('http://localhost:5000');
    console.log(resp.data.response?.data?.message || 'Conexión exitosa a la API');
  } catch (err) {
    console.error(err.response?.data?.message || 'Error al conectar con la API');
  }
}

fetchData();

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', // La URL de tu backend
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;