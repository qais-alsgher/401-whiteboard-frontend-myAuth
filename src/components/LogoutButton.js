import { React, useContext } from 'react';
import { UserNameContext } from '../Helper/Context';
function LogoutButton() {
    const { userName, setUserName } = useContext(UserNameContext);

    const handleLogOut = () => {
        setUserName(false);
        window.location.reload();
    }
    return (
        <button className='btn  rounded-pill login' onClick={() => { handleLogOut() }}>
            Log Out
        </button>
    );
};

export default LogoutButton;
