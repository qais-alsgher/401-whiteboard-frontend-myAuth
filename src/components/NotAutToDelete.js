import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
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

        //     <Modal show={props.show} onHide={props.handleClose} animation={false} className="all-modal">
        //         <Modal.Header className='no-auth' closeButton>
        //             <Modal.Title>welcome to solve problem website</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body className='no-auth'>You Are't The Owner The Owner Is {props.owner}</Modal.Body>
        //         <Modal.Footer className='no-auth'>
        //             <Button className='rounded-pill' variant="secondary" onClick={props.handleClose}>
        //                 Close
        //             </Button>
        //         </Modal.Footer>
        //     </Modal> 
        // </div >
    )
}

export default NotAutToDelete;
