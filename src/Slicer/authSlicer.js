import { createSlice } from "@reduxjs/toolkit";
import { initialState } from '../config/initials';

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loginReqest = true;
            state.showInvalid = false;
        },
        loginSuccess: (state, action) => {
            state.loggedIn = true;
            state.userName = action.payload.userName;
            state.token = action.payload.token;
            state.showInvalid = false;
            state.loginReqest = false;
            state.capabilities = action.payload.capabilities;
            state.data = action.payload;
        },
        loginFailed: (state, action) => {
            state.loginReqest = false;
            state.messageInv = action.payload.errMes;
            state.showInvalid = true;
            state.loggedIn = false;
        },
        signupRequest: (state) => {
            state.signupReqest = true;
            state.showInvalid = false;
        },
        signupSuccess: (state, action) => {
            state.loggedIn = true;
            state.userName = action.payload.userName;
            state.token = action.payload.token;
            state.showInvalid = false;
            state.signupReqest = false;
            state.capabilities = action.payload.capabilities;
            state.data = action.payload;
        },
        signupFailed: (state, action) => {
            state.signupReqest = false;
            state.messageInv = action.payload.errMes;
            state.showInvalid = true;
            state.loggedIn = false;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.token = '';
        }
    }
});


export const { loginRequest, loginSuccess, loginFailed, signupRequest, signupSuccess, signupFailed, logout } = authSlice.actions;

export default authSlice.reducer;
