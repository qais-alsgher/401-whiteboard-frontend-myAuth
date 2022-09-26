import React from 'react';
import CaedPost from './CaedPost';
import axios from 'axios';
import Swal from 'sweetalert2';
import cookies from 'react-cookies';

function Post(props) {


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
                props.getPostComment();
            };
        })

    }

    return (
        <div>
            {
                props.posts.map((ele, indxe) => {
                    return (
                        <div key={indxe}>
                            <CaedPost
                                post={ele}
                                getPostComment={props.getPostComment}
                                handleDelete={handledelete} />
                        </div>
                    )
                })
            }
            {/* <NotAutToDelete
                show={showNotAD}
                handleClose={handleClose}
                owner={owner} /> */}
        </div>
    )
}

export default Post;
