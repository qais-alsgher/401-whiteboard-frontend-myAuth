import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css';
function Login() {

    const { loginWithRedirect } = useAuth0();

    return <button className='btn  rounded-pill login' onClick={() => loginWithRedirect()}>Log In</button>;


}

export default Login;
