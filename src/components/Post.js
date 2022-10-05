import { React, useContext } from 'react';
import CaedPost from './CaedPost';
import axios from 'axios';
import Swal from 'sweetalert2';
import cookies from 'react-cookies';
import { postContext } from '../Context/PostContext';


function Post(props) {

    const { getPostComment, postsAndComment } = useContext(postContext);

    const handledelete = async (id) => {
        const token = cookies.load('token');
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
                        Authorization: `Bearer ${token}`
                    }
                });
                getPostComment();
            };
        })

    }

    return (
        <div>
            {
                postsAndComment.map((ele, indxe) => {
                    return (
                        <div key={indxe}>
                            <CaedPost
                                post={ele}
                                handleDelete={handledelete} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post;
