import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface DialogState {
  isOpen: boolean;
  title?: string;
  message?: string;
}

const initialState: DialogState = {
  isOpen: false,
  title: undefined,
  message: undefined,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showErrorDialog: (state, action: PayloadAction<string>) => {
      // Instead of opening a dialog → show toast
      toast.error(action.payload);

      // Optional: keep state for backward compatibility
      state.isOpen = false;
      state.message = action.payload;
      state.title = "Error";
    },

    showSuccessDialog: (state, action: PayloadAction<string>) => {
      toast.success(action.payload);
      state.isOpen = false;
    },

    clearDialog: (state) => {
      state.isOpen = false;
      state.message = undefined;
      state.title = undefined;
    },
  },
});

export const { showErrorDialog, showSuccessDialog, clearDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
