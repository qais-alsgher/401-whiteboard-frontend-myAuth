import { React, useState, useContext } from 'react';
import axios from 'axios';
import CommentForPost from './CommentForPost';
import { MdSend } from "react-icons/md";
import { postContext } from '../Context/PostContext';
import { Button, Input, Box, HStack } from '@chakra-ui/react';

function AddCommentForm(props) {

    const [content, setContent] = useState('');
    const { getPostComment } = useContext(postContext);

    const handleChange = (e) => {
        setContent(e.target.value)
    };

    const handleCreateComment = async (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('curentUser'));
        const newComment = {
            commentAuther: props.name,
            commentContent: content,
            postId: props.commentPost.id,
            autherCommentImage: props.picture,
            userId: +data.id
        }

        axios.post(`https://post-my-auth.herokuapp.com/comment`, newComment, {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        }).then(res => {
            getPostComment();
            setContent('');
        }).catch(e => {
            console.log(e.message || e);
        }
        )
    };

    return (
        <div>
            {
                props.commentPost.comments.map((ele, index) => {
                    return (
                        <Box key={index}>
                            < CommentForPost
                                comment={ele}
                            />
                        </Box>
                    )
                })
            }
            {/* className="formComent" */}
            <form onSubmit={handleCreateComment}  >
                <HStack>
                    <Input type="text"
                        onChange={handleChange}
                        value={content}
                        placeholder='Add Comment'
                    />
                    <Button type='submit'>
                        <MdSend />
                    </Button>
                </HStack>

            </form>
        </div>
    )
}

export default AddCommentForm;
