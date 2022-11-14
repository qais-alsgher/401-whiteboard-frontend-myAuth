import { React, useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from "react-bootstrap/Form";
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
} from '@chakra-ui/react';


function Login() {

    const { user, handleLogin } = useContext(authContext);

    // console.log(user);
    // console.log(user.showInvalid);
    // console.log(user.messageInv);
    return (
        <Box>
            {!user.loggedIn &&
                <form onSubmit={handleLogin}>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' id="email" />
                    <FormLabel>Password</FormLabel>
                    <Input type='Password' id="password" />

                    {user.loginReqest &&
                        <Button disabled className=" login" type="submit">
                            Login
                        </Button>
                    }
                    {!user.loginReqest &&
                        <Button type="submit" className=" login" id='submit' data-testid="login-submit">
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
            }
            {
                user.loggedIn &&
                <Heading as='h1' size='4xl' noOfLines={3} mt='30%' p='10'>
                    welcome {user.userName} To Solve-Problems website 🎉
                </Heading>
            }
        </Box>



        // <div className="row d-flex justify-content-center ">
        //     <div className="col-lg-6 position-absolute top-50 translate-middle-y ">

        //         {!user.loggedIn &&
        //             <>
        //                 <h2 className='text-center text-white mb-5'>Login</h2>
        //                 <Form onSubmit={handleLogin} >
        //                     <fieldset>
        //                         <Form.Group className="mb-4 ">
        //                             <Form.Label className='text-left text-light text-capitalize'>Email</Form.Label>
        //                             <Form.Control id="email" data-testid="login-email" type='email' className='mb-3' />
        //                             <Form.Label className='text-left text-light text-capitalize'>Password</Form.Label>
        //                             <Form.Control type="password" id="password" data-testid="login-password" />
        //                         </Form.Group>
        //                         {user.loginReqest &&
        //                             <Button disabled className="btn  rounded-pill login" type="submit">
        //                                 Login
        //                             </Button>
        //                         }
        //                         {!user.loginReqest &&
        //                             <Button onSubmit={handleLogin} className="btn  rounded-pill login" type="submit" id='submit' data-testid="login-submit">
        //                                 Login
        //                             </Button>
        //                         }
        //                     </fieldset>
        //                     <br />
        //                     {user.showInvalid &&
        //                         <h3 class="text-danger">{user.messageInv}</h3>
        //                     }
        //                 </Form>
        //             </>
        //         }
        //         {user.loggedIn &&
        //             <div>
        //                 <h2 className='text-white' data-testid="welcome-mes">welcome {user.userName} To Solve-Problems website 🎉</h2>
        //             </div>
        //         }
        //     </div>
        // </div >

    );


}

export default Login;
