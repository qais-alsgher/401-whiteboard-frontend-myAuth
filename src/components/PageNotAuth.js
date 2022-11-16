import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box
} from '@chakra-ui/react';

function PageNotAuth(props) {
    return (
        <Box>
            <Modal isOpen={props.show} onClose={() => { props.handleClose() }} size='lg'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>welcome to solve problem website</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} size='lg'>
                        <br />
                        pls login in for website to allow post and comment and see comments
                    </ModalBody>
                    <ModalFooter >
                        <Button colorScheme='red' mr={3} onClick={() => { props.handleClose() }}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}

export default PageNotAuth;
