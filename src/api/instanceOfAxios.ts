import axios, { AxiosError } from "axios";
import ENDPOINTS from "./Endpoints";
import { store } from "../store";
import { getAccessToken, logoutUser } from "../store/auth/authCreators";
import Endpoints from "./Endpoints";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8002",
  headers: {
    Accept: "aplication/json",
    "Content-Type": "application/json",
  },
});
const urlsSkipAuth = [
  ENDPOINTS.AUTH.LOGIN,
  ENDPOINTS.AUTH.REFRESH,
  ENDPOINTS.AUTH.LOGOUT,
];

axiosInstance.interceptors.request.use(async (config) => {
  if (config.url && urlsSkipAuth.includes(config.url)) {
    return config;
  }

  const accessToken = await store.dispatch(getAccessToken());

  if (accessToken) {
    const autharization = `Bearer ${accessToken}`;

    config.headers = {
      ...config.headers,
      authorization: autharization,
    } as any;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const isLoggedIn = !!store.getState().auth.authDate.accessToken;

    if (
      error.response?.status === 401 &&
      isLoggedIn &&
      error.request.url !== Endpoints.AUTH.LOGOUT
    ) {
      store.dispatch(logoutUser());
    }

    throw error;
  }
);
