import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { User } from "../schemas/User";

const API = process.env.REACT_APP_SERVER_URL;

type AuthContextProps = {
  user?: User;
  isUserSignedIn: boolean;
  signInUser: (u: User) => void;
  signOutUser: () => void;
  getSignedInUser: () => User | undefined;
};

export const AuthContext = createContext<AuthContextProps>({
  getSignedInUser: () => undefined,
  signInUser: () => {},
  signOutUser: () => {},
  isUserSignedIn: false,
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
  fetch(`${API}/auth/me`, {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setUser(data);
        localStorage.setItem("logged-in", JSON.stringify(data));
      }
    })
    .catch(() => {});
  }, []);

  const contextProps: AuthContextProps = {
    user,
    isUserSignedIn: Boolean(user),
    getSignedInUser: () => user,
    signInUser: (user) => {
      localStorage.setItem("logged-in", JSON.stringify(user));
      setUser(user);
    },
    signOutUser: () => {
      localStorage.removeItem("logged-in");
      setUser(undefined);
    },
  };

  return <AuthContext.Provider value={contextProps}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  return ctx;
}
