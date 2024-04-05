import { createSlice } from "@reduxjs/toolkit";

const user = {
    name: "Marouane",
    country: "tn",
    age: 24
};

const userSlice = createSlice({
    name: "user",
    initialState : user,
    reducers: {
        user :{
        resetUser: (state, action) => {
            // Reset the user state
        },
        addUser: (state, action) => {
            // Add a new user
        },
        updateUser: (state, action) => {
            // Update an existing user
        }}
    }
});

export const { resetUser, addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
