import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "James Dean",
    dateOfBirth: "--",
    country: "South Africa",
    mobileNumber: "0736746218",
    email: "nkgogojimmy@gmail.com",
    dietReq: [],
    communication: "SMS",
  },
];

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllUsers = (state) => {
  const users = state.users;
  return users[users.length - 1]
} 

export const { userAdded } = UsersSlice.actions;

export default UsersSlice.reducer;
