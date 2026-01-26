import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const login = (password) => {
    if (password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
