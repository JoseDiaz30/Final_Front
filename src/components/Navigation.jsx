import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  
  if (location.pathname === '/dashboard') {
    return null
  }

  return (
    <nav>
      {/* Navigation content goes here */}
    </nav>
  );
}
export default Navigation;
