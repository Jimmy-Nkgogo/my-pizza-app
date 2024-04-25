import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "1", name: "Mpho Nkgogo", location: "Cape Town" }];

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users;
export default UsersSlice.reducer