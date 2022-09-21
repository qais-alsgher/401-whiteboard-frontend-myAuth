import { React, useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import AddCommentForm from './AddCommentForm';
import { LoginContext, UserNameContext } from '../Helper/Context';
import { FaComment, FaEyeSlash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import NotAutToDelete from './NotAutToDelete';
import UpdatePost from './UpdatePost';
import defaultImage from '../image/defaultImage.jpg';
function CaedPost(props) {

    const { loggedIn } = useContext(LoginContext);
    const { userName } = useContext(UserNameContext);
    const [showComment, setShowComent] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);
    const [postEditId, setPostEditId] = useState("");
    const [owner, setOwner] = useState("");
    const [showNotAD, setShowNotAD] = useState(false);

    const hanleShow = () => {
        setShowComent(true);
    }
    const handleHidleComment = () => {
        setShowComent(false);
    }
    // to update post 
    const handleShowEditPost = (id, postAouthr) => {
        if (userName === postAouthr) {
            setShowEditPost(true);
            setPostEditId(id);
        } else {
            setShowNotAD(true);
            setOwner(postAouthr);
        }
    };

    const handleClose = () => {
        setShowNotAD(false);
        setShowEditPost(false);
    }

    return (
        <div>
            <Card className="post">
                <div className='owner-post-row'>
                    <img className="imge-owner-post" src={props.post.aouthrImage} alt="imge owner the post" />
                    <Card.Text className='post-name'>{props.post.postAouthr}
                        <MdEdit className='edit-post-icon' onClick={() => { handleShowEditPost(props.post.id, props.post.postAouthr) }} />
                        <button onClick={() => { props.handleDelete(props.post.postAouthr, props.post.id) }}>X</button>
                    </Card.Text>
                </div>
                <Card.Title className='post-text' >{props.post.postTitle}</Card.Title>

                <Card.Img variant="top" src={props.post.postImge ? props.post.postImge : defaultImage} />
                <Card.Body className='body-card-post'>
                    <Card.Text className='post-text'>
                        {props.post.postContent}
                    </Card.Text>
                    <hr />
                </Card.Body>
                {(loggedIn && !showComment) &&
                    <FaComment className='icon-comment' onClick={hanleShow} />

                }

                {showComment &&
                    <div className='icon-hiden' >
                        <FaEyeSlash onClick={handleHidleComment} />
                    </div>
                }

                {!loggedIn &&
                    <p className='commentNon'>Pls Login To Can Comment</p>
                }
                {showComment &&
                    <AddCommentForm
                        commentPost={props.post}
                        name={userName}
                        getPostComment={props.getPostComment}
                    />
                }
            </Card>
            <UpdatePost
                show={showEditPost}
                id={postEditId}
                handleClose={handleClose}
                getPostComment={props.getPostComment}
            />
            <NotAutToDelete
                show={showNotAD}
                handleClose={handleClose}
                owner={owner} />
        </div>
    )
}

export default CaedPost;
