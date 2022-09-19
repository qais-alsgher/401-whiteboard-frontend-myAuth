import { React, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import base64 from 'base-64';
import axios from 'axios';
import Singup from './Singup';
import { LoginContext, UserNameContext } from '../Helper/Context';
function Login() {
    const [show, setShow] = useState(false);
    const { loggedIn, setLoggedIn } = useContext(LoginContext);
    const { userName, setUserName } = useContext(UserNameContext);

    const handleLogin = async (e) => {
        e.preventDefault();

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
            setUserName(e.target.email.value);
            // setShow(false);
        }).catch(err => {
            console.log(err);
        })

    }
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    return (

        <div >
            <Modal show={show} onHide={() => handleClose()} className="all-modal">
                <Modal.Header className='formAddPost' closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className='formAddPost'>
                    <Form onSubmit={handleLogin}>
                        <fieldset>
                            {/* <button>Login</button> */}
                            <Form.Group className="mb-4 form-feld-post">
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="email" type='email' />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" id="password" />
                            </Form.Group>
                            <Button onSubmit={handleLogin} className="btn  rounded-pill login" type="submit">
                                Login
                            </Button>
                            <Singup
                                handleCloseLogin={handleClose}
                            />
                        </fieldset>
                    </Form>
                </Modal.Body>
            </Modal>
            <button button className='btn  rounded-pill login' onClick={() => handleShow()}> Log In</button >;
        </div>
    )


}

export default Login;
