import { useLocation } from "react-router-dom";
import { useTheme } from "../layout/Theme";

function Navigation() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  if (location.pathname === '/dashboard') {
    return null
  }

  return (
    <nav className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <header> <button className="justify-center p-1 m-1" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
          </button>
            </header>
    </nav>
    
  )
}

export default Navigation;