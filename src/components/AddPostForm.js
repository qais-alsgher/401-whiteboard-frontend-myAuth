import { React, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { postContext } from '../Context/PostContext';

function AddPostForm(props) {
    const { handleCreatePost } = useContext(postContext);

    return (
        <div >
            <Modal show={props.show} onHide={() => props.handleClose()} className="all-modal">
                <Modal.Header className='formAddPost' closeButton>
                    <Modal.Title>Add New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className='formAddPost'>
                    <Form onSubmit={handleCreatePost}>
                        <fieldset>
                            <Form.Group className="mb-4 form-feld-post">
                                <Form.Label>Title Post</Form.Label>
                                <Form.Control id="titlePost" />
                                <Form.Label>Image</Form.Label>
                                <Form.Control id="imgUrl" />
                                <Form.Label>Content</Form.Label>
                                <Form.Control id="ContentPost" />
                            </Form.Group>
                            <Button className="btn  rounded-pill login" type="submit">
                                Submit
                            </Button>
                        </fieldset>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddPostForm;
