import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegState {
  authDate: {
    name: string | null;
    isLoading: boolean;
    error: string | null;
  };
  profileData: {
    profile: string | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: RegState = {
  authDate: {
    name: null,
    isLoading: false,
    error: null,
  },
  profileData: {
    profile: null,
    isLoading: false,
    error: null,
  },
};

export const regReducer = createSlice({
  name: "reg",
  initialState,
  reducers: {
    registerStart: (state): RegState => ({
      ...state,
      authDate: {
        ...state.authDate,
        isLoading: true,
      },
    }),
    registerSucess: (state, action: PayloadAction<string>): RegState => ({
      ...state,
      authDate: {
        ...state.authDate,
        name: action.payload,
        isLoading: false,
        error: null,
      },
    }),
    registerFailure: (state, action: PayloadAction<string>): RegState => ({
      ...state,
      authDate: {
        ...state.authDate,
        isLoading: false,
        error: action.payload,
      },
    }),
  },
});
export const { registerStart, registerFailure, registerSucess } =
  regReducer.actions;

export default regReducer.reducer;
