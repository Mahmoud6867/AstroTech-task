import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", email: "", phone: 0 } },
  reducers: {
    changeUsername: (state, action) => {
      state.value.name = action.payload.name;
    },
    changeEmail: (state, action) => {
      state.value.email = action.payload.email;
    },
    changePhone: (state, action) => {
      state.value.phone = action.payload.phone;
    },
  },
});

export const { changeUsername, changeEmail, changePhone } = userSlice.actions;
export default userSlice.reducer;
