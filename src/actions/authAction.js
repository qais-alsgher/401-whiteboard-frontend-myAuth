import axios from "axios";
import { actiontype } from "../config/constant";

export const loginUser = async (dispash, payload) => {

    try {
        dispash({ type: actiontype.REQUEST_LOGIN });
        await axios.post(`https://post-my-auth.herokuapp.com/login`, {}, {
            headers: {
                Authorization: `Basic ${payload}`
            }
        }).then(res => {
            console.log(res.data);
            dispash({ type: actiontype.LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem('curentUser', JSON.stringify(res.data));
            localStorage.setItem('token', res.data.token);
            // setLoggedIn(true);
            // setUserName(res.data.userName);
            // cookies.save('token', res.data.token);
            // cookies.save('userName', res.data.userName);
            // cookies.save('userId', res.data.id);
            // cookies.save('role', res.data.role);
            // cookies.save('capabilities', JSON.stringify(res.data.capabilities));
            // setShowInvalid(false);
        }).catch(err => {
            console.log(err.response.data);
            dispash({ type: actiontype.LOGIN_FAILED, payload: { errMes: err.response.data } })
            // console.log(err);
            // setMessageInv(err.response.data);
            // setShowInvalid(true);
        })

    } catch (e) {
        console.log(e || e.message);
    }
}


export const signupUser = async (dispash, payload) => {
    try {
        dispash({ type: actiontype.REQUEST_SIGNUP });
        await axios.post('https://post-my-auth.herokuapp.com/singup', payload).then(res => {
            console.log(res);
            dispash({ type: actiontype.SIGNUP_SUCCESS, payload: res.data });
            localStorage.setItem('curentUser', JSON.stringify(res.data));
            localStorage.setItem('token', res.data.token);
            // setLoggedIn(true);
            // setUserName(res.data.userName);
            // cookies.save('token', res.data.token);
            // cookies.save('userName', res.data.userName);
            // cookies.save('userId', res.data.id);
            // cookies.save('role', res.data.role);
            // cookies.save('capabilities', JSON.stringify(res.data.capabilities));
        }).catch(e => console.log(e))
    } catch (e) {
        console.log(e || e.massage);
    }
}

export const logoutUser = (dispash) => {

    localStorage.removeItem('curentUser');
    localStorage.removeItem('token');
    dispash({ type: actiontype.LOGOUT });
}