import { React, useContext } from 'react';
import LogoutButton from './components/LogoutButton';
import { authContext } from './Context/AuthContext';
import { postContext } from './Context/PostContext';
import AddPostForm from './components/AddPostForm';
import PageNotAuth from './components/PageNotAuth';
import SolveProblems from './image/SolveProblems.jpg';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, Box, Container, HStack, Text, Spacer, Flex, Button, useColorMode, IconButton } from '@chakra-ui/react';

function Header(props) {
    const { user } = useContext(authContext);
    const { show, handleClose, handleShow, setShow } = useContext(postContext);
    const { colorMode, toggleColorMode } = useColorMode();


    return (

        <Box bgColor='#0F3D3D' >
            <Container maxW='6xl' mb='8'>
                <Flex alignItems='center' justifyContent='center'>
                    <Box alignItems='center'
                        _hover={{
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
                        <Text onClick={handleShow} p='3'
                            color='white'
                            _hover={{
                                color: 'black',
                                textDecoration: 'none',
                                cursor: 'pointer'
                            }}>Add Post</Text>
                    </Box>
                    <Box >
                        <IconButton
                            colorScheme='none'
                            aria-label='Color Mode'
                            icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                            onClick={toggleColorMode}
                            alignSelf='flex-end'
                        />
                    </Box>
                    <Spacer />
                    {!user.loggedIn &&
                        <HStack>
                            <Box >
                                <Link href="/login">
                                    <Button p='3' variant={['base']}>Login</Button>
                                </Link>
                            </Box>
                            <Box >
                                <Link href='/signup'>
                                    <Button p='3' variant={['base']}>Signup</Button>
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



    )
}

export default Header;
