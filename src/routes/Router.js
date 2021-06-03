import React from "react";

import { useAuthContext } from "../auth/authReducer";
import LoginPage from "../auth/LoginPage";
import Dashboard from "../dashboard/Dashboard";

export default function Router() {
  const {
    state: { isAuthenticated },
  } = useAuthContext();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return <Dashboard />;
}
