import React, { useReducer, useMemo } from "react";

import { authReducer, initAuthState } from "./auth/authReducer";
import { AuthContext } from "./auth/authReducer";
import Router from "./routes/Router";

export default function App() {
  const [state, dispatch] = useReducer(
    authReducer,
    {
      token: localStorage.getItem("token"),
    },
    initAuthState,
  );
  const store = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <AuthContext.Provider value={store}>
      <Router />
    </AuthContext.Provider>
  );
}
