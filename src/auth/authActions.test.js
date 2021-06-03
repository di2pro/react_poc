import { authenticate, login, logout } from "./authActions";

describe("authActions", () => {
  describe("logout", () => {
    it("should clear token and dispatch", () => {
      jest.spyOn(window.localStorage.__proto__, "clear");
      const dispatch = jest.fn();
      logout(dispatch);
      expect(localStorage.setItem).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({ type: "auth.logout" });
    });
  });

  describe("authenticate", () => {
    it("should return token if credentials are valid", async () => {
      const token = await authenticate({
        email: "test@test.test",
        password: "test1234",
      });
      expect(token).toBeDefined();
    });

    it("should reject if email is incorrect", async () => {
      await expect(
        authenticate({ email: "test2@test.test", password: "test1234" }),
      ).rejects.toBeDefined();
    });

    it("should reject if password is incorrect", async () => {
      await expect(
        authenticate({ email: "test@test.test", password: "test12345" }),
      ).rejects.toBeDefined();
    });
  });

  describe("login", () => {
    it("should login user if credentials are correct", async () => {
      jest.spyOn(window.localStorage.__proto__, "setItem");
      const dispatch = jest.fn();
      await login(dispatch)({ email: "test@test.test", password: "test1234" });
      expect(dispatch).toHaveBeenCalledWith({ type: "auth.login_requested" });
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "token",
        expect.any(String),
      );
      expect(dispatch).toHaveBeenCalledWith({
        type: "auth.login_done",
        payload: { token: expect.any(String) },
      });
    });
  });
});
