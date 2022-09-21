import { React, useContext } from 'react';
import { LoginContext } from '../Helper/Context';
import cookies from 'react-cookies';

function LogoutButton() {
    const { setLoggedIn } = useContext(LoginContext);

    const handleLogOut = () => {
        cookies.remove('token');
        setLoggedIn(false);
        window.location.reload();
    }
    return (
        <button className='btn  rounded-pill login' onClick={() => { handleLogOut() }}>
            Log Out
        </button>
    );
};

export default LogoutButton;
