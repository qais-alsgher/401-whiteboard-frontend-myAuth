import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { authContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { getPostAndComments } from '../actions/postCommentsAction';

export const postContext = createContext();

const PostContextProvider = (props) => {
    const { user } = useContext(authContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const postsAndComment = useSelector(state => state.post.postAndCommentsData);

    const getPostComment = async () => {

        getPostAndComments(dispatch);

    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                await axios.delete(`https://post-my-auth.herokuapp.com/post/${id}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
                getPostComment();
            };
        })

    };


    const handleCreatePost = async (e) => {
        e.preventDefault();


        const nullValue = undefined;
        const newPost = {
            postAouthr: user.userName,
            postTitle: e.target.titlePost.value,
            postContent: e.target.ContentPost.value,
            postImge: e.target.imgUrl.value,
            aouthrImage: nullValue,
            userId: user.data.id
        }
        // console.log(newPost);

        await axios.post(`https://post-my-auth.herokuapp.com/Post`, newPost, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(res => {
            getPostComment();
            handleClose();
            Swal.fire(
                'Added The Post Successfully :)',
                '',
                'success'
            )
        }).catch(e => {
            console.log(e.message || e);
        })
    };



    const value = { getPostComment, postsAndComment, handleDelete, handleCreatePost, handleShow, handleClose, show, setShow };


    return (
        <postContext.Provider value={value}>
            {props.children}
        </postContext.Provider>
    );
}

export default PostContextProvider;
