import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";

// Get User from localStrorage
const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  admin: admin ? admin : null,
  isError: false,
  isSucess: false,
  isLoading: false,
  message: "",
};

// Login Admin
export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async (admin, thunkAPI) => {
    try {
      return await adminService.loginAdmin(admin);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout Admin
export const logoutAdmin = createAsyncThunk("admin/logoutAdmin", async () => {
  await adminService.logoutAdmin();
});

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    resetAdmin: (state) => {
      state.isError = false;
      state.isSucess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.admin = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.admin = null;
      })
      .addCase(logoutAdmin.fulfilled, (state) => {
        state.admin = null;
      });
  },
});

export const { resetAdmin } = adminSlice.actions;
export default adminSlice.reducer;
