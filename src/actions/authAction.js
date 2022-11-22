import axios from "axios";
import { loginRequest, loginSuccess, loginFailed, signupRequest, signupSuccess, signupFailed, logout } from "../Slicer/authSlicer";
export const loginUser = async (dispatch, payload) => {
    try {
        dispatch(loginRequest());
        await axios.post(`https://post-my-auth.herokuapp.com/login`, {}, {
            headers: {
                Authorization: `Basic ${payload}`
            }
        }).then(res => {
            
            dispatch(loginSuccess(res.data));
            localStorage.setItem('curentUser', JSON.stringify(res.data));
            localStorage.setItem('token', res.data.token);

        }).catch(err => {
            dispatch(loginFailed({ errMes: err.response.data }));
        })

    } catch (e) {
        console.log(e || e.message);
    }
}


export const signupUser = async (dispatch, payload) => {
    try {
        dispatch(signupRequest());
        await axios.post('https://post-my-auth.herokuapp.com/singup', payload).then(res => {
            console.log(res);
            dispatch(signupSuccess(res.data));
            localStorage.setItem('curentUser', JSON.stringify(res.data));
            localStorage.setItem('token', res.data.token);

        }).catch(e => console.log(e))
    } catch (e) {
        console.log(e || e.massage);
        dispatch(signupFailed(e.response.data));
    }
}

export const logoutUser = (dispatch) => {

    localStorage.removeItem('curentUser');
    localStorage.removeItem('token');
    dispatch(logout());
}