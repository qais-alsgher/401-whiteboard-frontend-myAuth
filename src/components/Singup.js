import { React, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { authContext } from '../Context/AuthContext';

function Singup() {
    const { loggedIn, handSingup, userName } = useContext(authContext);


    return (
        <div className="row d-flex justify-content-center ">
            <div className="col-lg-6  col-md-5  position-absolute top-50 translate-middle-y ">

                {!loggedIn &&
                    <>
                        <h2 className='text-center text-white mb-5'>Singup</h2>
                        <Form onSubmit={handSingup}>
                            <fieldset>
                                <Form.Group className="mb-4 ">
                                    <Form.Label className='text-left text-light text-capitalize'>Username</Form.Label>
                                    <Form.Control id="name" type="text" pattern="^[a-zA-Z ]*$" required className='mb-3' />
                                    <Form.Label className='text-left text-light text-capitalize'>Email</Form.Label>
                                    <Form.Control id="email" type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required className='mb-3' />
                                    <Form.Label className='text-left text-light text-capitalize'>Password</Form.Label>
                                    <Form.Control type="password" id="password" />
                                    <Form.Select className="mt-4" id='role' name='role'>
                                        <option value='admin'>admin</option>
                                        <option value='user' selected="selected">user</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button onSubmit={handSingup} className="btn  rounded-pill login" type="submit" required>
                                    Singup
                                </Button>
                            </fieldset>
                        </Form>
                    </>
                }
                {loggedIn &&
                    <div>
                        <h2 className='text-white'>welcome {userName} To Solve-Problems website 🎉</h2>
                    </div>
                }

            </div>
        </div >


    );
}

export default Singup;
