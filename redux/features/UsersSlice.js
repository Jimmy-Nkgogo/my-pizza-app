import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    firstName: "James",
    lastName: "Dean",
    dateOfBirth: "--",
    nationality: "South Africa",
    mobile: "0736746218",
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
    updateDietaryRequirements(state, action) {
      const { userId, requirements } = action.payload;
      const user = state.find((user) => user.id === userId);
      if (user) {
        user.dietReq = requirements;
      }
    },
    updateCommunication(state, action) {
      const { userId, communication } = action.payload;
      const user = state.find((user) => user.id === userId);
      if (user) {
        user.communication = communication;
      }
    },
  },
});

export const selectAllUsers = (state) => {
  const users = state.users;
  return users[users.length - 1];
};

export const { userAdded, updateDietaryRequirements, updateCommunication } =
  UsersSlice.actions;

export default UsersSlice.reducer;
