// src/authProvider.ts
import { AuthProvider } from "react-admin";

const validCredentials = {
  username: "tpklAdmin",
  password: "azerty123",
};

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    if (
      username === validCredentials.username &&
      password === validCredentials.password
    ) {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          authenticated: true,
          username: username,
          role: "admin",
          timestamp: new Date().getTime(), 
        }),
      );
      return Promise.resolve();
    }
    return Promise.reject(new Error("Invalid username or password"));
  },

  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },

  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    const auth = localStorage.getItem("auth");
    if (!auth) return Promise.reject();

    const { authenticated, timestamp } = JSON.parse(auth);

    const sessionTimeout = 8 * 60 * 60 * 1000; 
    if (new Date().getTime() - timestamp > sessionTimeout) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }

    return authenticated ? Promise.resolve() : Promise.reject();
  },

  getPermissions: () => {
    const auth = localStorage.getItem("auth");
    return auth ? Promise.resolve(JSON.parse(auth).role) : Promise.reject();
  },

  getIdentity: () => {
    const auth = localStorage.getItem("auth");
    if (!auth) return Promise.reject();

    const { username } = JSON.parse(auth);
    return Promise.resolve({
      id: username,
      fullName: username,
    });
  },
};

export default authProvider;