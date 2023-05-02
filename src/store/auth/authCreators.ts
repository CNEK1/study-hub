import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api";
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
} from "../../api/auth/types";
import {
  loginStart,
  loginSucess,
  loginFailure,
  logoutSuccess,
  loadProfileStart,
  loadProfileFailure,
  loadProfileSucess,
} from "./authReducer";
import { history } from "../../utils/history";
import { store } from "..";
import { AxiosPromise } from "axios";
import { isTokenExpired } from "../../utils/jwtExpired";
import { registerFailure, registerStart, registerSucess } from "./regReducer";

export const loginUser =
  (data: ILoginRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart());

      const res = await api.auth.login(data);

      dispatch(loginSucess(res.data.accessToken));
      dispatch(getProfile());
    } catch (e: any) {
      console.log(e);

      dispatch(loginFailure(e.message));
    }
  };
export const registerUser =
  (data: IRegisterRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(registerStart());
      const res = await api.auth.register(data);
      console.log(res);
      dispatch(registerSucess(res.data.name));
    } catch (e: any) {
      console.log(e);
      dispatch(registerFailure(e.message));
    }
  };
export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      await api.auth.logout();

      dispatch(logoutSuccess());

      history.push("/login");
    } catch (e) {
      console.log(e);
    }
  };

export const getProfile =
  () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loadProfileStart());

      const res = await api.auth.getProfile();

      dispatch(loadProfileSucess(res.data));
    } catch (e: any) {
      console.log(e);

      dispatch(loadProfileFailure(e.message));
    }
  };

let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null;

export const getAccessToken =
  () =>
  async (dispatch: Dispatch<any>): Promise<string | null> => {
    try {
      const accessToken = store.getState().auth.authDate.accessToken;

      if (!accessToken || isTokenExpired(accessToken)) {
        if (refreshTokenRequest === null) {
          refreshTokenRequest = api.auth.refreshToken();
        }

        const res = await refreshTokenRequest;
        refreshTokenRequest = null;

        dispatch(loginSucess(res.data.accessToken));

        return res.data.accessToken;
      }

      return accessToken;
    } catch (e) {
      console.log(e);

      return null;
    }
  };
