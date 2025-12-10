import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={MainRouter} />
    </AuthProvider>
  );
}

export default App;