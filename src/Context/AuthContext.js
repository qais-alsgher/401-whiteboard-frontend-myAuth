import { createContext } from "react";
import base64 from 'base-64';
import { loginUser, signupUser, logoutUser } from '../actions/authAction';
import { useDispatch, useSelector } from 'react-redux';

export const authContext = createContext();

const AuthContextProvider = (props) => {
    const despatch = useDispatch();
    const user = useSelector(state => state.auth);
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const encodedHeader = base64.encode(`${data.email}:${data.password}`);

        loginUser(despatch, encodedHeader);
    }

    // logout when logout remove token and and change state login 
    const handleLogOut = () => {

        logoutUser(despatch);
    }


    // create new user 
    const handSignup = async (e) => {
        e.preventDefault();
        const data = {
            userName: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value
        }

        signupUser(despatch, data);

    }


    const canDo = (action) => {

        const capabilitieUser = user.capabilities;

        if (capabilitieUser === undefined || !capabilitieUser.includes(action)) {
            return false;
        }

        return true;
    }



    const value = { user, handleLogin, handleLogOut, handSignup, canDo };


    return (
        <authContext.Provider value={value}>
            {props.children}
        </authContext.Provider>
    )

}


export default AuthContextProvider;