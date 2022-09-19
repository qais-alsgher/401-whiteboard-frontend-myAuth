import { React, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { UserNameContext } from '../Helper/Context';
import axios from 'axios';

function AddPostForm(props) {
    const { userName, setUserName } = useContext(UserNameContext);

    const handleCreatePost = async (e) => {
        e.preventDefault();

        const newPost = {
            postAouthr: userName,
            postTitle: e.target.titlePost.value,
            postContent: e.target.ContentPost.value,
            postImge: e.target.imgUrl.value,
            aouthrImage: null
        }

        await axios.post(`https://message-postgres.herokuapp.com/Post`, newPost);
        props.getPostComment();
        props.handleClose();
    };

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
