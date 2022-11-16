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
    Select,
    Text
} from '@chakra-ui/react';
function Signup() {
    const { user, handSignup } = useContext(authContext);


    return (
        <Box alignItems='center' justifyContent='center' >
            {!user.loggedIn &&
                <Box>
                    <Text align='center'
                        fontSize='35px'
                        fontWeight='bold'
                        mb='5'
                        bgGradient='linear(to-r,#0F3D3D,#53c4e4)'
                        bgClip='text'
                    >
                        Signup
                    </Text>
                    <form onSubmit={handSignup}>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' id="name" pattern="^[a-zA-Z ]*$" required mb='5' />
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required mb='5' />
                        <FormLabel>Password</FormLabel>
                        <Input type='Password' id="password" mb='5' />
                        <Select id='role' name='role' mb='5' defaultValue='user'>
                            <option value='user'>user</option>
                            <option value='admin' selected="selected">admin</option>
                        </Select>
                        {user.signupReqest &&
                            <Button variant={['base']} type="submit" >
                                Signup
                            </Button>
                        }
                        {!user.signupReqest &&
                            <Button onSubmit={handSignup} data-testid="signup-submit" variant={['base']} type="submit">
                                Signup
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
                <Heading as='h1' size='3xl' noOfLines={3} mt='30%' p='10'>
                    Welcome {user.userName} To Solve-Problems Website 🎉
                </Heading>
            }
        </Box >


    );
}

export default Signup;
