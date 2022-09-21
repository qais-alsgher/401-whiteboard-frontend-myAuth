import { React, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import base64 from 'base-64';
import axios from 'axios';

import cookies from 'react-cookies';

import { LoginContext, UserNameContext } from '../Helper/Context';
function Login() {
    const [showInvalid, setShowInvalid] = useState(false);
    const [messageInv, setMessageInv] = useState("");
    const { loggedIn, setLoggedIn } = useContext(LoginContext);
    const { userName, setUserName } = useContext(UserNameContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setShowInvalid(false);
        const data = {
            userName: e.target.email.value,
            password: e.target.password.value
        }

        const encodedHeader = base64.encode(`${data.userName}:${data.password}`);

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
            setShowInvalid(false);
        }).catch(err => {
            console.log(err);
            setMessageInv(err.response.data);
            setShowInvalid(true);
        })

    }

    return (
        <div className="row d-flex justify-content-center ">
            <div className="col-lg-6 position-absolute top-50 translate-middle-y ">


                {!loggedIn &&
                    <Form onSubmit={handleLogin} >
                        <fieldset>
                            <Form.Group className="mb-4 ">
                                <Form.Label className='text-left text-light text-capitalize'>Email</Form.Label>
                                <Form.Control id="email" type='email' className='mb-3' />
                                <Form.Label className='text-left text-light text-capitalize'>Password</Form.Label>
                                <Form.Control type="password" id="password" />
                            </Form.Group>
                            <Button onSubmit={handleLogin} className="btn  rounded-pill login" type="submit">
                                Login
                            </Button>
                        </fieldset>
                        <br />
                        {showInvalid &&
                            <h3 class="text-danger">{messageInv}</h3>
                        }
                    </Form>
                }
                {loggedIn &&
                    <div>
                        <h2 className='text-light'>welcome {userName} To Solve-Problems website 🎉</h2>
                    </div>
                }
            </div>
        </div >

    )


}

export default Login;
