import React, { useCallback } from "react";

import { useAuthContext } from "../auth/authReducer";
import { logout } from "../auth/authActions";

export default function Dashboard() {
  const { dispatch } = useAuthContext();
  const handleLogoutClick = useCallback(() => {
    logout(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hello Markus 👋🏻</p>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
