import { createContext, useState } from "react";
import base64 from 'base-64';
import axios from 'axios';
import cookies from 'react-cookies';


export const authContext = createContext();


const AuthContextProvider = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [showInvalid, setShowInvalid] = useState(false);
    const [messageInv, setMessageInv] = useState("");
    const [userName, setUserName] = useState("");
    // const [capabilities, setCapabilities] = useState();



    // login to website send data for bisic auth 
    const handleLogin = async (e) => {
        e.preventDefault();
        setShowInvalid(false);
        console.log(e.target.email.value);
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const encodedHeader = base64.encode(`${data.email}:${data.password}`);

        await axios.post(`https://post-my-auth.herokuapp.com/login`, {}, {
            headers: {
                Authorization: `Basic ${encodedHeader}`
            }
        }).then(res => {
            console.log(res.data);
            setLoggedIn(true);
            setUserName(res.data.userName);
            cookies.save('token', res.data.token);
            cookies.save('userName', res.data.userName);
            cookies.save('userId', res.data.id);
            cookies.save('role', res.data.role);
            cookies.save('capabilities', JSON.stringify(res.data.capabilities));
            setShowInvalid(false);
        }).catch(err => {
            console.log(err);
            setMessageInv(err.response.data);
            setShowInvalid(true);
        })

    }

    // logout when logout remove token and and change state login 
    const handleLogOut = () => {
        cookies.remove('token');
        setLoggedIn(false);
    }


    // create new user 
    const handSingup = async (e) => {
        e.preventDefault();
        const data = {
            userName: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value
        }
        await axios.post('https://post-my-auth.herokuapp.com/singup', data).then(res => {
            console.log(res);
            setLoggedIn(true);
            setUserName(res.data.userName);
            cookies.save('token', res.data.token);
            cookies.save('userName', res.data.userName);
            cookies.save('userId', res.data.id);
            cookies.save('role', res.data.role);
            cookies.save('capabilities', JSON.stringify(res.data.capabilities));
        }).catch(e => console.log(e))

    }


    // to check have token in cookies if have loggedIn directly
    const checkToken = () => {
        const name = cookies.load('userName');
        const token = cookies.load('token');
        // const capabilitieUser = cookies.load('capabilities');
        // console.log(capabilitieUser);
        if (token) {
            setLoggedIn(true);
            setUserName(name);
            // var capabilitieUser = cookies.load('capabilities');
            // setCapabilities(cookies.load('capabilities'));
        }
        // setCapabilities(5);
        // console.log(capabilities);
        // console.log(capabilitieUser);
    }

    const canDo = (action) => {

        const capabilitieUser = cookies.load('capabilities');

        if (capabilitieUser === undefined || !capabilitieUser.includes(action)) {
            return false;
        }

        return true;
    }



    const value = { loggedIn, showInvalid, messageInv, userName, handleLogin, handleLogOut, checkToken, handSingup, canDo };

    return (
        <authContext.Provider value={value}>
            {props.children}
        </authContext.Provider>
    )

}


export default AuthContextProvider;