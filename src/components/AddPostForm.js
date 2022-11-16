import { React, useContext } from 'react';
import { postContext } from '../Context/PostContext';
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

function AddPostForm(props) {
    const { handleCreatePost } = useContext(postContext);
    return (
        <Box >
            <Modal isOpen={props.show} onClose={() => { props.handleClose() }} size='lg' colorScheme='blackAlpha'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} size='lg'>
                        <form onSubmit={handleCreatePost}>
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
        </Box >
    )
}

export default AddPostForm;
