import { React, useContext } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './components/LogoutButton';
import { authContext } from './Context/AuthContext';
import { postContext } from './Context/PostContext';
import AddPostForm from './components/AddPostForm';
import PageNotAuth from './components/PageNotAuth';
import SolveProblems from './image/SolveProblems.jpg';
import { Link, Box, Container, HStack, Text, Spacer, Flex, Button } from '@chakra-ui/react';

function Header() {
    const { user } = useContext(authContext);
    const { show, handleClose, handleShow, setShow } = useContext(postContext);



    return (

        <Box bgColor='#0F3D3D' >
            <Container maxW='6xl' mb='8'>
                <Flex align='center' justifyContent='center'>
                    <Box alignItems='center' _hover={{
                        transition: '0.3s',
                        transform: 'rotate(1turn)'
                    }}>
                        <Link href="/">
                            <img src={SolveProblems} width='50' alt="logo" p='3' />
                        </Link>
                    </Box>
                    <Box >
                        <Link href='/'>

                            <Text
                                p='3'
                                color='white'
                                _hover={{
                                    color: 'black',
                                    textDecoration: 'none'
                                }}
                            >Home</Text>
                        </Link>
                    </Box>
                    <Box >
                        <Button
                            onClick={handleShow}
                            bg='none'
                            border='none'
                            textDecoration='none'
                            p='3'
                            color='white'
                            _hover={{
                                background: "none",
                                color: 'black',
                            }}
                        >Add Post</Button>
                    </Box>
                    <Spacer />
                    {!user.loggedIn &&
                        <HStack>
                            <Box >
                                <Link href="/login">
                                    <Text p='3'>Login</Text>
                                </Link>
                            </Box>
                            <Box >
                                <Link href='/singup'>
                                    <Text p='3'>Singup</Text>
                                </Link>
                            </Box>
                        </HStack>
                    }

                    {user.loggedIn &&
                        <LogoutButton />
                    }

                </Flex>
            </Container>
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
        </Box >


        //      <div className="sticky-top" >
        //     <Navbar expand="lg" className='navbar'>
        //         <Container >
        //             <Navbar.Brand href="/"><img src={SolveProblems} className="logo-nav" alt='logo-solve-problems' /></Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">

        //                 <Nav className="me-auto">
        //                     <Nav.Link href="/" className='p-lg-3 header-post'>Posts</Nav.Link>
        //                     <button onClick={handleShow} className="btnt p-lg-3">Add Post</button>
        //                 </Nav>
        //                 <Nav className=" d-flex justify-content-end">
        //                     {!user.loggedIn &&
        //                         <div>
        //                             <Nav.Link href="/singup" className='btn  rounded-pill login ms-2'>Singup</Nav.Link>
        //                             <Nav.Link href="/login" className='btn  rounded-pill login'>Login</Nav.Link>
        //                         </div>
        //                     }
        //                     {user.loggedIn &&
        //                         <LogoutButton />
        //                     }

        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        //     {
        //         user.loggedIn &&
        //         <AddPostForm
        //             handleClose={handleClose}
        //             show={show}
        //             setShow={setShow}
        //         />
        //     }
        //     {
        //         !user.loggedIn &&
        //         <PageNotAuth
        //             handleClose={handleClose}
        //             show={show}
        //             setShow={setShow}
        //         />
        //     }
        // </div > 

    )
}

export default Header;
