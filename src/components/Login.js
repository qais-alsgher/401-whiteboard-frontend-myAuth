import { React, useContext } from 'react';
import { authContext } from '../Context/AuthContext';
import {
    Box,
    FormLabel,
    Input,
    Button,
    Heading,
    Alert,
    AlertIcon,
    AlertTitle,
    Text
} from '@chakra-ui/react';


function Login() {

    const { user, handleLogin } = useContext(authContext);

    // console.log(user);
    // console.log(user.showInvalid);
    // console.log(user.messageInv);
    return (
        <Box>
            {!user.loggedIn &&
                <Box>
                    <Text align='center'
                        fontSize='35px'
                        fontWeight='bold'
                        mb='5'
                        bgGradient='linear(to-r,#0F3D3D,#53c4e4)'
                        bgClip='text'
                    >
                        Login
                    </Text>

                    <form onSubmit={handleLogin}>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' id="email" mb='5' />
                        <FormLabel>Password</FormLabel>
                        <Input type='Password' id="password" mb='5' />

                        {user.loginReqest &&
                            <Button disabled variant={['base']} type="submit">
                                Login
                            </Button>
                        }
                        {!user.loginReqest &&
                            <Button type="submit" variant={['base']} id='submit' data-testid="login-submit">
                                Login
                            </Button>
                        }

                        {user.showInvalid &&
                            <Alert status='error'>
                                <AlertIcon />
                                <AlertTitle>{user.messageInv} !</AlertTitle>
                            </Alert>
                        }

                    </form>
                </Box>
            }
            {
                user.loggedIn &&
                <Heading as='h1' size='4xl' noOfLines={3} mt='30%' p='10'>
                    welcome {user.userName} To Solve-Problems website ????
                </Heading>
            }
        </Box>

    );


}

export default Login;
