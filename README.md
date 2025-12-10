PROYECTO FINAL FULLSTACK BIOS

App Web FullStack con un DashBoard con sistema de autenticación, gestión de item o artículos mediante CRUD completo, registro y login de usuario.

Para 🚀 (desplegar) el proyecto se utilizo:

Vercel para el frontend y Render para el backend

Herramientas y dependencias necesarias 📋:
 
Backend:
Node.js con Express
MongoDB con Mongoose
JWT para autenticación
bcryptjs para encriptación de contraseñas
cors para manejo y control de origen
dotenv para manejo de variables
nodemon para reiniciar automáticamente el servidor después de hacer cambios

Frontend:
React+Vite
react router DOM para navegación
Axios para peticiones HTTP y conexión con la API
Tailwind CSS

Para la instalación se uso el comando npm install en la terminal 🔧:

back:

Node.js, MongoDB, jwt, bcryptjs, cors, dotenv (npm install express mongoose bcryptjs jsonwebtoken dotenv cors)
nodemon (npm install -D nodemon)

Y para el front:

React+Vite (npm create vite@latest my-react-app)
react router, axios, tailwind css (npm install react-router-dom axios tailwindcss @tailwindcss/vite)

Instalación en tu terminal ⚙️:

1. Clona el repositorio
    git clone https://github.com/this-repository
    cd this-repository
2. Instala las dependencias y configura el backend
   npm install 
   Crear archivo .env
   
   PORT=5000
   MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/
   JWT Configuration
   JWT_SECRET=cambiar_por_clave_secreta_segura
3. Configura el front 
   npm install
4. Inicia MongoDB
   Si lo utilizas de forma local
   mongod
   Y si es en la nube
   mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<base_de_datos>

Ejecución 🔩:
   Abre dos terminales diferentes una para front y otra para back
   back:
   cd server
   npm run dev
   Servidor en el puerto http://localhost:5000
   front:
   cd client
   npm run dev
   Cliente en el puerto http://localhost:5173

Variables de entorno 🛠️:

Variables utilizadas en el backend:

PORT: Puerto del servidor
MONGODB_URI: Conexión a MongoDB
JWT_SECRET: Clave secreta para tokens JWT
FRONTEND_URL: URL del front

Y para el frontend:
 
VITE_API_URL: Para conectarse a la API 


Autoría ✒️:
Jose Diaz - Proyecto Final BIOS

Licencia 📄:
Proyecto meramente con fines académicos.