import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { fetchUsuarioRequest } from "../services/authService";

interface User {
  userId: string;
  name: string;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  logout: () => void;
}

const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(() => ({
    userId: localStorage.getItem("userId") ?? "",
    name: "",
  }));

  useEffect(() => {
    if (user.userId && !user.name) {
      fetchUsuarioRequest()
        .then((data) => {
          setUser((prev) => ({ ...prev, name: data.name }));
        })
        .catch(() => {});
    }
  }, [user.userId, user.name]);

  const logout = () => {
    localStorage.removeItem("userId");
    setUser({ userId: "", name: "" });
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}


export function useUser() {
  return useContext(UserContext);
}
