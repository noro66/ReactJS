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
        resetUser: (state, action) => {
            console.log(action.payload);
        },
        addUser: (state, action) => {
            console.log(action.payload);
        },
        updateUser: (state, action) => {
            // Update an existing user
        }
    }
});

export const { resetUser, addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
