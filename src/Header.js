import { React, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './components/LogoutButton';
import { LoginContext } from './Helper/Context';
import AddPostForm from './components/AddPostForm';
import PageNotAuth from './components/PageNotAuth';
import SolveProblems from './image/SolveProblems.jpg';


function Header(props) {
    const { loggedIn } = useContext(LoginContext);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="sticky-top" >
            <Navbar expand="lg" className='navbar'>
                <Container >
                    <Navbar.Brand href="/"><img src={SolveProblems} className="logo-nav" alt='logo-solve-problems' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="https://632b8a73b9668800665cef71--cool-piroshki-3edb27.netlify.app/" className='p-lg-3 header-post'>Posts</Nav.Link>
                            <button onClick={handleShow} className="btnt p-lg-3">Add Post</button>
                        </Nav>
                        <Nav className=" d-flex justify-content-end">
                            {!loggedIn &&
                                <div>
                                    <Nav.Link href="https://632b8a73b9668800665cef71--cool-piroshki-3edb27.netlify.app/singup" className='btn  rounded-pill login ms-2'>Singup</Nav.Link>
                                    <Nav.Link href="https://632b8a73b9668800665cef71--cool-piroshki-3edb27.netlify.app/login" className='btn  rounded-pill login'>Login</Nav.Link>
                                </div>
                            }
                            {loggedIn &&
                                <LogoutButton />
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                loggedIn &&
                <AddPostForm
                    handleClose={handleClose}
                    show={show}
                    setShow={setShow}
                    getPostComment={props.getPostComment}
                />
            }
            {
                !loggedIn &&
                <PageNotAuth
                    handleClose={handleClose}
                    show={show}
                    setShow={setShow}
                    getPostComment={props.getPostComment}
                />
            }
        </div >
    )
}

export default Header;
