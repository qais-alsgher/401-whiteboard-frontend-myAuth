import { React, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import axios from 'axios';
import cookies from 'react-cookies';
import { LoginContext, UserNameContext } from '../Helper/Context';

function Singup(props) {
    const { loggedIn, setLoggedIn } = useContext(LoginContext);
    const { userName, setUserName } = useContext(UserNameContext);


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
            setUserName(res.data.userName);
            cookies.save('token', res.data.token);
            cookies.save('userName', res.data.userName);
            cookies.save('userId', res.data.id);
        }).catch(e => console.log(e))

    }




    return (
        <div className="row d-flex justify-content-center ">
            <div className="col-lg-6  col-md-5  position-absolute top-50 translate-middle-y ">

                {!loggedIn &&
                    <Form onSubmit={handSingup}>
                        <fieldset>
                            <Form.Group className="mb-4 ">
                                <Form.Label className='text-left text-light text-capitalize'>Username</Form.Label>
                                <Form.Control id="name" type="text" pattern="^[a-zA-Z ]*$" required className='mb-3' />
                                <Form.Label className='text-left text-light text-capitalize'>Email</Form.Label>
                                <Form.Control id="email" type='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required className='mb-3' />
                                <Form.Label className='text-left text-light text-capitalize'>Password</Form.Label>
                                <Form.Control type="password" id="password" />
                            </Form.Group>
                            <Button onSubmit={handSingup} className="btn  rounded-pill login" type="submit" required>
                                Singup
                            </Button>
                        </fieldset>
                    </Form>
                }
                {loggedIn &&
                    <div>
                        <h2>welcome {userName} To Solve-Problems website 🎉</h2>
                    </div>
                }

            </div>
        </div >


    );
}

export default Singup;
