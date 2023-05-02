import axios, { AxiosPromise } from "axios";
import ENDPOINTS from "../Endpoints";
import { axiosInstance } from "../instanceOfAxios";
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "./types";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(ENDPOINTS.AUTH.LOGIN, params);
export const logout = (): AxiosPromise =>
  axiosInstance.get(ENDPOINTS.AUTH.LOGOUT);
export const getProfile = (): AxiosPromise<string> =>
  axiosInstance.get(ENDPOINTS.AUTH.PROFILE);
export const register = (
  params: IRegisterRequest
): AxiosPromise<IRegisterResponse> =>
  axiosInstance.post(ENDPOINTS.AUTH.REGISTER, params);

export const refreshToken = (): AxiosPromise<ILoginResponse> =>
  axiosInstance.get(ENDPOINTS.AUTH.REFRESH);
