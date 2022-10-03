import { React, useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import AddCommentForm from './AddCommentForm';
import { LoginContext, UserNameContext } from '../Helper/Context';
import { FaComment, FaEyeSlash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import UpdatePost from './UpdatePost';
import DefaultImage from '../image/DefaultImage.jpg';
import cookies from 'react-cookies';

function CaedPost(props) {

    const { loggedIn } = useContext(LoginContext);
    const { userName } = useContext(UserNameContext);
    const [showComment, setShowComent] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);
    const [postEditId, setPostEditId] = useState("");
    const [role, setRole] = useState('');


    useEffect(() => {
        setRole(cookies.load('role'));
    }, []);

    const hanleShow = () => {
        setShowComent(true);
    }
    const handleHidleComment = () => {
        setShowComent(false);
    }
    // to update post 
    const handleShowEditPost = (id) => {
        setShowEditPost(true);
        setPostEditId(id);
    };

    const handleClose = () => {
        setShowEditPost(false);
    }

    return (
        <div>
            <Card className="post">
                <div className='owner-post-row'>
                    <img className="imge-owner-post" src={props.post.aouthrImage} alt="imge owner the post" />
                    <Card.Text className='post-name'>{props.post.postAouthr}

                        {(role === 'admin' || props.post.postAouthr === userName) && loggedIn &&
                            <>
                                <MdEdit className='edit-post-icon' onClick={() => { handleShowEditPost(props.post.id) }} />
                                <button onClick={() => { props.handleDelete(props.post.id) }}>X</button>
                            </>
                        }
                    </Card.Text>
                </div>
                <Card.Title className='post-text' >{props.post.postTitle}</Card.Title>

                <Card.Img variant="top" src={props.post.postImge ? props.post.postImge : DefaultImage} />
                <Card.Body className='body-card-post'>
                    <Card.Text className='post-text'>
                        {props.post.postContent}
                    </Card.Text>
                    <hr />
                </Card.Body>
                {
                    (loggedIn && !showComment) &&
                    <FaComment className='icon-comment' onClick={hanleShow} />

                }

                {
                    showComment &&
                    <div className='icon-hiden' >
                        <FaEyeSlash onClick={handleHidleComment} />
                    </div>
                }

                {
                    !loggedIn &&
                    <p className='commentNon'>Pls Login To Can Comment</p>
                }
                {
                    showComment &&
                    <AddCommentForm
                        commentPost={props.post}
                        name={userName}
                        getPostComment={props.getPostComment}
                    />
                }
            </Card >

            <UpdatePost
                show={showEditPost}
                id={postEditId}
                handleClose={handleClose}
                getPostComment={props.getPostComment}
            />
        </div >
    )
}

export default CaedPost;
