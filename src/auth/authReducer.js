import { useContext, createContext } from "react";

import { authActions } from "./authActions";

export const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

export const initAuthState = ({ token }) => ({
  token,
  isAuthenticated: !!token,
});

export const authReducer = (state, action) =>
  authActions[action.type](state, action.payload);
