import React, { useCallback, useRef } from "react";

import { useAuthContext } from "./authReducer";
import { login } from "./authActions";

export default function LoginPage() {
  const { state, dispatch } = useAuthContext();
  const { isAuthenticationInProgress } = state;
  const emailInput = useRef("");
  const passInput = useRef("");

  const loginWithCredentials = useCallback(
    (event) => {
      event.preventDefault();
      login(dispatch)({
        email: emailInput.current.value,
        password: passInput.current.value,
      });
    },
    [dispatch],
  );

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={loginWithCredentials}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            disabled={isAuthenticationInProgress}
            id="email"
            type="email"
            ref={emailInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            disabled={isAuthenticationInProgress}
            type="password"
            id="password"
            ref={passInput}
          />
        </div>
        <div>
          <button disabled={isAuthenticationInProgress} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
