import { React, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import axios from 'axios';
import cookies from 'react-cookies';
import Swal from 'sweetalert2';
import { postContext } from '../Context/PostContext';

function UpdatePost(props) {
    const { getPostComment } = useContext(postContext);

    const handleUpdatePost = async (e) => {
        e.preventDefault();
        const token = cookies.load('token');

        const editPost = {
            postTitle: e.target.titlePost.value,
            postContent: e.target.ContentPost.value,
            postImge: e.target.imgUrl.value,
        }

        await axios.put(`https://post-my-auth.herokuapp.com/post/${props.id}`, editPost, {
            headers: {
                Authorization: `Bearer ${token}`
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
        <div >
            <Modal show={props.show} onHide={() => props.handleClose()} className="all-modal">
                <Modal.Header className='formAddPost' closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className='formAddPost'>
                    <Form onSubmit={handleUpdatePost}>
                        <fieldset>
                            <Form.Group className="mb-4 form-feld-post">
                                <Form.Label>Title Post</Form.Label>
                                <Form.Control id="titlePost" />
                                <Form.Label>Image</Form.Label>
                                <Form.Control id="imgUrl" />
                                <Form.Label>Content</Form.Label>
                                <Form.Control id="ContentPost" />
                            </Form.Group>
                            <Button className="btn  rounded-pill login" onSubmit={handleUpdatePost} type="submit" >
                                Submit
                            </Button>
                        </fieldset>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UpdatePost;
