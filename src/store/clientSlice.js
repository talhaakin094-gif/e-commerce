import { createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
export const loginUser = (data, navigate, from) => async (dispatch) => {
    try {
        const res = await api.post("/login", data);
        const token = res.data.token;
        const user = res.data;
        dispatch(setUser({ user, token }));
        api.defaults.headers.common["Authorization"] = token;
        if (data.rememberMe) {
            localStorage.setItem("token", token);
        }
        navigate(from || "/");
    } catch (error) {
        throw error;
    }
};
const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
    authLoading: true
};
const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.authLoading = false;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
            state.authLoading = false;
        },
        authChecked: (state) => {
        state.authLoading = false;
        }
    }
});


export const { setUser, logout, authChecked } = clientSlice.actions;

export default clientSlice.reducer;