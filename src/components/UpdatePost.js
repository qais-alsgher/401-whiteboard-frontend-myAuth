import { React, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { postContext } from '../Context/PostContext';
import { authContext } from '../Context/AuthContext';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormLabel,
    Box
} from '@chakra-ui/react';

function UpdatePost(props) {
    const { getPostComment } = useContext(postContext);
    const { user } = useContext(authContext);

    const handleUpdatePost = async (e) => {
        e.preventDefault();

        const editPost = {
            postTitle: e.target.titlePost.value,
            postContent: e.target.ContentPost.value,
            postImge: e.target.imgUrl.value,
        }

        await axios.put(`https://post-my-auth.herokuapp.com/post/${props.id}`, editPost, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then((res) => {
            getPostComment();
            props.handleClose();
            Swal.fire(
                'Update The Post Successfully :)',
                '',
                'success'
            )
        }).catch(e => {
            console.log(e.message || e);
        })
    }
    return (

        <Modal isOpen={props.show} onClose={() => { props.handleClose() }} size='lg'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add New Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6} size='lg'>
                    <form onSubmit={handleUpdatePost}>
                        <Box mt='4'>
                            <FormLabel>Title Post</FormLabel>
                            <Input type="text" id="titlePost" />
                        </Box>
                        <Box mt='4'>
                            <FormLabel>Image URL</FormLabel>
                            <Input type="text" id="imgUrl" />
                        </Box>
                        <Box mt='4' mb='4'>
                            <FormLabel>Content</FormLabel>
                            <Input type="text" id="ContentPost" />
                        </Box>
                        <ModalFooter >
                            <Button colorScheme='red' mr={3} onClick={() => { props.handleClose() }}>
                                Close
                            </Button>
                            <Button colorScheme='blue' type='submit' >Submit</Button>
                            {/* variant='ghost' */}
                        </ModalFooter>

                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}

export default UpdatePost;
