import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
function PageNotAuth(props) {
    return (
        <div>


            <Modal show={props.show} onHide={props.handleClose} animation={false} className="all-modal">
                <Modal.Header className='no-auth' closeButton>
                    <Modal.Title>welcome to solve problem website</Modal.Title>
                </Modal.Header>
                <Modal.Body className='no-auth'>pls login in for website to allow post and comment and see comments</Modal.Body>
                <Modal.Footer className='no-auth'>
                    <Button className='rounded-pill' variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Login />
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PageNotAuth;
