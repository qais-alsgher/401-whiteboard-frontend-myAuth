import { React, useContext } from 'react';
import { authContext } from '../Context/AuthContext';
import { Button } from '@chakra-ui/react';

function LogoutButton() {
    const { handleLogOut } = useContext(authContext);

    return (
        <Button className='login' onClick={() => { handleLogOut() }}>
            Log Out
        </Button>
    );
};

export default LogoutButton;
