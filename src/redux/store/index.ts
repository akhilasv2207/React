import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../reducers/auth-slice';
import dialogSlice from "../reducers/dialog-slice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        dialog: dialogSlice

    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;