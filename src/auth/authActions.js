export const AUTH_ACTION_TYPES = Object.freeze({
  LOGIN_DONE: "auth.login_done",
  LOGIN_REQUESTED: "auth.login_requested",
  LOGIN_FAILED: "auth.login_failed",
  LOGOUT: "auth.logout",
});

export const authActions = {
  [AUTH_ACTION_TYPES.LOGIN_REQUESTED]: (state) => ({
    ...state,
    isAuthenticationInProgress: true,
  }),
  [AUTH_ACTION_TYPES.LOGIN_DONE]: (state, { token }) => ({
    ...state,
    isAuthenticationInProgress: false,
    token,
    isAuthenticated: true,
  }),
  [AUTH_ACTION_TYPES.LOGIN_FAILED]: (state) => ({
    ...state,
    isAuthenticationInProgress: false,
    isAuthenticated: false,
  }),
  [AUTH_ACTION_TYPES.LOGOUT]: (state) => ({
    ...state,
    token: null,
    isAuthenticated: false,
  }),
};

export const login =
  (dispatch) =>
  async ({ ...credentials }) => {
    dispatch({
      type: AUTH_ACTION_TYPES.LOGIN_REQUESTED,
    });

    try {
      const token = await authenticate(credentials);
      localStorage.setItem("token", token);

      dispatch({
        type: AUTH_ACTION_TYPES.LOGIN_DONE,
        payload: { token },
      });
    } catch (error) {
      dispatch({
        type: AUTH_ACTION_TYPES.LOGIN_FAILED,
      });
    }
  };

export const authenticate = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email !== "test@test.test" || password !== "test1234") {
        return reject(new Error("invalid credentials"));
      }

      return resolve("secret");
    }, 2000);
  });
};

export const logout = (dispatch) => {
  localStorage.clear();
  dispatch({
    type: AUTH_ACTION_TYPES.LOGOUT,
  });
};
