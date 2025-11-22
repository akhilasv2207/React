import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as AppConstants from "../../utils/constants";

/* ---------------------------------- Types --------------------------------- */
export interface User {
  _id: string;
  email: string;
  role: "patient" | "provider" | "admin";
  isActive: boolean;
  consent: {
    accepted: boolean;
    acceptedAt?: string;
    ipAddress?: string;
  };
  lastLoginAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  role: User["role"] | null;
  isActive: boolean | null;
}

/* -------------------------- Safe localStorage getters --------------------- */
const safelyGet = (key: string) => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
};

/* --------------------------------- Initial State -------------------------- */
const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: !!safelyGet(AppConstants.LS_TOKEN),
  token: safelyGet(AppConstants.LS_TOKEN),
  user: safelyGet(AppConstants.LS_USER)
    ? JSON.parse(safelyGet(AppConstants.LS_USER) as string)
    : null,
  role: (safelyGet(AppConstants.LS_ROLE) as User["role"]) || null,
  isActive: safelyGet(AppConstants.LS_ACTIVE) === "true",
};

/* --------------------------------- Slice ---------------------------------- */
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /* ------------------------------- LOGIN SUCCESS ------------------------ */
    loginSuccess: (
      state,
      action: PayloadAction<{
        token: string;
        user: User;
      }>
    ) => {
      const { token, user } = action.payload;

      // save to localStorage
      localStorage.setItem(AppConstants.LS_TOKEN, token);
      localStorage.setItem(AppConstants.LS_USER, JSON.stringify(user));
      localStorage.setItem(AppConstants.LS_ROLE, user.role);
      localStorage.setItem(AppConstants.LS_ACTIVE, String(user.isActive));

      // update redux store
      state.isAuthenticated = true;
      state.token = token;
      state.user = user;
      state.role = user.role;
      state.isActive = user.isActive;
      state.isLoading = false;
    },

    /* ----------------------------- UPDATE USER ---------------------------- */
    setUser: (state, action: PayloadAction<User>) => {
      localStorage.setItem(AppConstants.LS_USER, JSON.stringify(action.payload));
      state.user = action.payload;
      state.role = action.payload.role;
      state.isActive = action.payload.isActive;
    },

    /* ----------------------------- SET LOADING ---------------------------- */
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    /* ------------------------------ LOGOUT ------------------------------- */
    logoutSuccess: (state) => {
      localStorage.removeItem(AppConstants.LS_TOKEN);
      localStorage.removeItem(AppConstants.LS_USER);
      localStorage.removeItem(AppConstants.LS_ROLE);
      localStorage.removeItem(AppConstants.LS_ACTIVE);

      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.role = null;
      state.isActive = null;
      state.isLoading = false;
    },
  },
});

/* ----------------------------- Export Actions ----------------------------- */
export const { loginSuccess, logoutSuccess, setUser, setLoading } =
  authSlice.actions;

export default authSlice.reducer;
