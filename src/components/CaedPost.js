import { React, useState, useContext } from 'react';
// import Card from 'react-bootstrap/Card';
import AddCommentForm from './AddCommentForm';
import { authContext } from '../Context/AuthContext';
import { FaComment, FaEyeSlash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import UpdatePost from './UpdatePost';
import DefaultImage from '../image/DefaultImage.jpg';
import { postContext } from '../Context/PostContext';
import { HStack, VStack, Box, Flex, Spacer, Text } from '@chakra-ui/react';

function CaedPost(props) {

    const { user, canDo } = useContext(authContext);
    const { handleDelete } = useContext(postContext);

    const [showComment, setShowComent] = useState(false);
    const [showEditPost, setShowEditPost] = useState(false);
    const [postEditId, setPostEditId] = useState("");




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
        // create card for each post
        <Box border='1px' mb='5' p='4' borderRadius='10'>
            <HStack spacing={4} borderColor='gray.200' >
                <Flex alignItems={'center'}>
                    <Box>
                        <img className="imge-owner" src={props.post.aouthrImage} alt="imge owner the post" />
                    </Box>
                    {props.post.postAouthr}
                    <Box _hover={{
                        color: '#0F3D3E',
                        cursor: 'pointer'
                    }}>
                        {(canDo('update') || props.post.postAouthr === user.userName) && user.loggedIn &&
                            <MdEdit className='edit-post-icon' onClick={() => { handleShowEditPost(props.post.id) }} />
                        }
                    </Box>
                </Flex>
                <Spacer />
                <Box _hover={{
                    color: 'red',
                    cursor: 'pointer'
                }}>
                    {(canDo('delete') || props.post.postAouthr === user.userName) && user.loggedIn &&
                        <button onClick={() => { handleDelete(props.post.id) }}>X</button>
                    }
                </Box>
            </HStack>
            <VStack spacing={4} align={props.post.postImge ? 'flex-start' : 'flex-center'} >
                <Text >{props.post.postTitle}</Text>
                <Box w='100%'>
                    <img
                        src={props.post.postImge ? props.post.postImge : DefaultImage}
                        alt="imge post"
                        className="post-imge"
                    />
                </Box>
                <Text>{props.post.postContent}</Text>
            </VStack>
            {
                <Box align='center'
                    _hover={{
                        color: '#0F3D3E',
                        cursor: 'pointer',
                        transform: 'rotate(360deg)',
                        transition: '0.5s'
                    }}>
                    {

                        (user.loggedIn && !showComment) &&
                        <FaComment onClick={hanleShow}
                            fontSize='30px'
                            mb='5'

                        />
                    }
                </Box>
            }
            {showComment &&

                <Flex
                    justifyContent='flex-end'
                    pr='16px'
                    _hover={{
                        color: '#0F3D3E',
                        cursor: 'pointer',
                    }}
                >
                    <FaEyeSlash onClick={handleHidleComment} />
                </Flex>
            }
            {
                !user.loggedIn &&
                <Box pb='3' align='center'>
                    <hr style={{ margin: '15px' }} />
                    <Text>Pls Login To Can Comment</Text>
                </Box>
            }
            {
                showComment &&
                <AddCommentForm
                    commentPost={props.post}
                    name={user.userName}
                />
            }

            <UpdatePost
                show={showEditPost}
                id={postEditId}
                handleClose={handleClose}
            />

        </Box >
        // <div>
        //     <Card className="post">
        //         <div className='owner-post-row'>
        //             <img className="imge-owner-post" src={props.post.aouthrImage} alt="imge owner the post" />
        //             <Card.Text className='post-name'>{props.post.postAouthr}

        //                 <>
        //                     {(canDo('update') || props.post.postAouthr === user.userName) && user.loggedIn &&
        //                         <MdEdit className='edit-post-icon' onClick={() => { handleShowEditPost(props.post.id) }} />
        //                     }
        //                     {(canDo('delete') || props.post.postAouthr === user.userName) && user.loggedIn &&
        //                         <button onClick={() => { handleDelete(props.post.id) }}>X</button>
        //                     }
        //                 </>
        //             </Card.Text>
        //         </div>
        //         <Card.Title className={props.post.postImge ? 'post-text' : 'post-text-Noimg'}>{props.post.postTitle}</Card.Title>
        //         {props.post.postImge &&

        //             <Card.Img variant="top" src={props.post.postImge ? props.post.postImge : DefaultImage} />
        //         }
        //         <Card.Body className='body-card-post'>
        //             <Card.Text className='post-text'>
        //                 {props.post.postContent}
        //             </Card.Text>
        //             <hr />
        //         </Card.Body>
        //         {
        //             (user.loggedIn && !showComment) &&
        //             <FaComment className='icon-comment' onClick={hanleShow} />

        //         }

        //         {
        //             showComment &&
        //             <div className='icon-hiden' >
        //                 <FaEyeSlash onClick={handleHidleComment} />
        //             </div>
        //         }

        //         {
        //             !user.loggedIn &&
        //             <p className='commentNon'>Pls Login To Can Comment</p>
        //         }
        //         {
        //             showComment &&
        //             <AddCommentForm
        //                 commentPost={props.post}
        //                 name={user.userName}
        //             />
        //         }
        //     </Card >

        //     <UpdatePost
        //         show={showEditPost}
        //         id={postEditId}
        //         handleClose={handleClose}
        //     />
        // </div >
    )
}

export default CaedPost;
