import { React, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './components/LogoutButton';
import { authContext } from './Context/AuthContext';
import { postContext } from './Context/PostContext';
import AddPostForm from './components/AddPostForm';
import PageNotAuth from './components/PageNotAuth';
import SolveProblems from './image/SolveProblems.jpg';


function Header(props) {
    const { user } = useContext(authContext);
    const { show, handleClose, handleShow, setShow } = useContext(postContext);



    return (
        <div className="sticky-top" >
            <Navbar expand="lg" className='navbar'>
                <Container >
                    <Navbar.Brand href="/"><img src={SolveProblems} className="logo-nav" alt='logo-solve-problems' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="/" className='p-lg-3 header-post'>Posts</Nav.Link>
                            <button onClick={handleShow} className="btnt p-lg-3">Add Post</button>
                        </Nav>
                        <Nav className=" d-flex justify-content-end">
                            {!user.loggedIn &&
                                <div>
                                    <Nav.Link href="/singup" className='btn  rounded-pill login ms-2'>Singup</Nav.Link>
                                    <Nav.Link href="/login" className='btn  rounded-pill login'>Login</Nav.Link>
                                </div>
                            }
                            {user.loggedIn &&
                                <LogoutButton />
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                user.loggedIn &&
                <AddPostForm
                    handleClose={handleClose}
                    show={show}
                    setShow={setShow}
                />
            }
            {
                !user.loggedIn &&
                <PageNotAuth
                    handleClose={handleClose}
                    show={show}
                    setShow={setShow}
                />
            }
        </div >
    )
}

export default Header;
