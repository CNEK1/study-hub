import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  authDate: {
    accessToken: string | null;
    isLoading: boolean;
    error: string | null;
  };
  profileData: {
    profile: string | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: AuthState = {
  authDate: {
    accessToken: null,
    isLoading: false,
    error: null,
  },
  profileData: {
    profile: null,
    isLoading: false,
    error: null,
  },
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state): AuthState => ({
      ...state,
      authDate: {
        ...state.authDate,
        isLoading: true,
      },
    }),
    loginSucess: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authDate: {
        ...state.authDate,
        accessToken: action.payload,
        isLoading: false,
        error: null,
      },
    }),
    loginFailure: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authDate: {
        ...state.authDate,
        isLoading: false,
        error: action.payload,
      },
    }),

    loadProfileStart: (state): AuthState => ({
      ...state,
      profileData: {
        ...state.profileData,
        isLoading: true,
      },
    }),
    loadProfileSucess: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      profileData: {
        ...state.profileData,
        profile: action.payload,
        isLoading: false,
        error: null,
      },
    }),
    loadProfileFailure: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      profileData: {
        ...state.profileData,
        isLoading: false,
        error: action.payload,
      },
    }),
    logoutSuccess: (): AuthState => initialState,
  },
});
export const {
  loadProfileStart,
  loadProfileSucess,
  loadProfileFailure,
  loginStart,
  loginSucess,
  loginFailure,
  logoutSuccess,
} = authReducer.actions;

export default authReducer.reducer;
