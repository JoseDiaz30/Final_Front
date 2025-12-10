import { createContext, useState } from 'react';
import AuthContext from './AuthContext';


const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AuthContext.Provider value={{ loading: false }}>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}
  
export default ThemeProvider;
export { ThemeContext }
