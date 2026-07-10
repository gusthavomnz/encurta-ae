import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  userId: string;
  name: string;
}

interface UserContextType {
  user: User;
  setUser: (user: User) => void;
}

const UserContext = createContext({} as UserContextType);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(() => ({
    userId: localStorage.getItem("userId") ?? "",
    name: "",
  }));

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}


export function useUser() {
  return useContext(UserContext);
}
