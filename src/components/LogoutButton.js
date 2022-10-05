import { React, useContext } from 'react';
import { authContext } from '../Context/AuthContext';


function LogoutButton() {
    const { handleLogOut } = useContext(authContext);

    return (
        <button className='btn  rounded-pill login' onClick={() => { handleLogOut() }}>
            Log Out
        </button>
    );
};

export default LogoutButton;
