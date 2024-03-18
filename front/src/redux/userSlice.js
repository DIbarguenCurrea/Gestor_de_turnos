import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {},
    userAppointments: [],
};

export const userSlice = createSlice({
    name: "actualUser",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setUserAppoitments: (state, action) => {
            state.userAppointments = action.payload; 
        }
    }
});

export const { setUserData, setUserAppoitments } = userSlice.actions;
export default userSlice.reducer; 