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
         return  {
               ...state,
             name: '',
             age: '',
             country: ''
            }
        },
        updateUser: (state, action) => {
           return {
               ...state,
               name: action.payload.name,
               country: action.payload.country,
               age: action.payload.age,
           }
        },

    }
});

export const { resetUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
