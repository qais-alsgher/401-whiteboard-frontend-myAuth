import { React, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { authContext } from '../Context/AuthContext';
import { postContext } from '../Context/PostContext';
import axios from 'axios';
import cookies from 'react-cookies';
import Swal from 'sweetalert2';

function AddPostForm(props) {
    const { userName } = useContext(authContext);
    const { getPostComment } = useContext(postContext);
    const nullValue = undefined;
    const handleCreatePost = async (e) => {
        e.preventDefault();

        const id = cookies.load('userId');
        const token = cookies.load('token');

        const newPost = {
            postAouthr: userName,
            postTitle: e.target.titlePost.value,
            postContent: e.target.ContentPost.value,
            postImge: e.target.imgUrl.value,
            aouthrImage: nullValue,
            userId: id
        }
        console.log(newPost);

        await axios.post(`https://post-my-auth.herokuapp.com/Post`, newPost, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            getPostComment();
            props.handleClose();
            Swal.fire(
                'Added The Post Successfully :)',
                '',
                'success'
            )

        }).catch(e => {
            console.log(e.message || e);
        })
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
