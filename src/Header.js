import { React, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './components/Login';
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
                    <Navbar.Brand href="#home"><img src={SolveProblems} className="logo-nav" alt='logo-solve-problems' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <button onClick={handleShow} className="btnt">Add Post</button>
                        </Nav>
                        <Nav className=" d-flex justify-content-end">
                            {!loggedIn &&
                                <div>
                                    <Login />
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
