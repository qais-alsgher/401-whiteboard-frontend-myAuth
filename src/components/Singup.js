import { React, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { LoginContext, UserNameContext } from '../Helper/Context';

function Singup(props) {
    const [show, setShow] = useState(false);
    const { setLoggedIn } = useContext(LoginContext);
    const { setUserName } = useContext(UserNameContext);

    const handSingup = async (e) => {
        e.preventDefault();
        const data = {
            userName: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        await axios.post('https://post-my-auth.herokuapp.com/singup', data).then(res => {
            console.log(res);
            setLoggedIn(true);
            setUserName(e.target.name.value);
        }).catch(e => console.log(e))

    }

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    const habndleCloseAll = () => {
        handleClose();
        props.handleCloseLogin();
    }

    return (
        <div>
            <Modal show={show} onHide={() => habndleCloseAll()} className="all-modal">
                <Modal.Header className='formAddPost' closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className='formAddPost'>
                    <Form onSubmit={handSingup}>
                        <fieldset>
                            <Form.Group className="mb-4 form-feld-post">
                                <Form.Label >Username</Form.Label>
                                <Form.Control id="name" type="text" pattern="^[a-zA-Z ]*$" />
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="email" type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" id="password" />
                            </Form.Group>
                            <Button onSubmit={handSingup} className="btn  rounded-pill login" type="submit">
                                Singup
                            </Button>
                        </fieldset>
                    </Form>
                </Modal.Body>
            </Modal>
            <button button className='btn  rounded-pill login' onClick={() => handleShow()}> Singup</button >
        </div>
    )
}

export default Singup;
