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

function NotAutToDelete(props) {
    return (

        <Box>
            <Modal isOpen={props.show} onClose={() => { props.handleClose() }} size='lg'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>welcome to solve problem website</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6} size='lg'>
                        You Are't The Owner The Owner Is {props.owner}
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

export default NotAutToDelete;
