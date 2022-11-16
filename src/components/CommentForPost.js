import { React, useState, useContext } from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
import { MdEdit, MdDelete, MdSend } from "react-icons/md";
import axios from 'axios';
import { authContext } from '../Context/AuthContext';
import { postContext } from '../Context/PostContext';
import NotAutToDelete from './NotAutToDelete';
import { HStack, VStack, Box, Spacer, Text, Input, Button } from '@chakra-ui/react';

function CommentForPost(props) {
    const { user } = useContext(authContext);
    const { getPostComment } = useContext(postContext);
    const [showNotAD, setShowNotAD] = useState(false);
    const [owner, setOwner] = useState("");
    const [showUpdate, setShowUpdate] = useState(false);
    const [updateValue, setUpdateValue] = useState(props.comment.commentContent);
    const [uptateId, setUpdateId] = useState("");

    // to delte comment
    const handleDlete = async (id, commentAuther) => {
        if (user.userName === commentAuther) {
            const token = localStorage.getItem('token');

            await axios.delete(`https://post-my-auth.herokuapp.com/comment/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getPostComment();

        } else {
            setOwner(commentAuther);
            setShowNotAD(true);
        }
    };

    const handleClose = () => {
        setShowNotAD(false);
    }
    // to update coment 
    const handleChange = (e) => {
        setUpdateValue(e.target.value);
    };


    const handleShowUpdate = (id, commentAuther) => {
        if (user.userName === commentAuther) {
            setShowUpdate(true);
            setUpdateId(id);
        } else {
            setOwner(commentAuther);
            setShowNotAD(true);
        }
    };


    const handleUpdate = async (e) => {
        e.preventDefault();

        const changeComment = {
            commentContent: updateValue
        };
        const token = localStorage.getItem('token')

        await axios.put(`https://post-my-auth.herokuapp.com/comment/${uptateId}`, changeComment, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        getPostComment();
        setShowUpdate(false);
    }


    return (


        <Box mb='5'>
            <VStack align='flex-start'>

                <HStack align='stretch' alignItems='center'>
                    <img src={props.comment.autherCommentImage} alt="comment" className='imge-owner' />
                    <Text>{props.comment.commentAuther}</Text>
                    <MdEdit className='edit-comment' onClick={() => { handleShowUpdate(props.comment.id, props.comment.commentAuther) }} />
                    <MdDelete className='delete-comment' onClick={() => { handleDlete(props.comment.id, props.comment.commentAuther) }} />
                </HStack>

                {!showUpdate &&
                    <HStack pl='8' >
                        <BsArrowReturnRight fontSize='20' />
                        <Text variant={['sm', 'md', 'lg', 'base']}>{props.comment.commentContent}</Text>
                    </HStack>
                }
            </VStack >
            <Spacer />
            {showUpdate &&
                <form onSubmit={handleUpdate} >
                    <HStack align='flex-start' pl='8' >
                        <BsArrowReturnRight className='row-poenter-comment' />
                        <Input type="text"
                            onChange={handleChange}
                            value={updateValue}
                            placeholder='Edit Comment'
                        />
                        <Button type='submit'>
                            <MdSend />
                        </Button>
                    </HStack>
                </form>

            }

            <NotAutToDelete
                show={showNotAD}
                handleClose={handleClose}
                owner={owner} />
        </Box >

    )
}


export default CommentForPost;
