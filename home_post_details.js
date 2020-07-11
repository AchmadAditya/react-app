import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function PostIdLink() {
    let { postId } = useParams();
    const posts = useSelector(state => [...state.posts]);
    const postExist = posts.find((value, index) => posts[index].id === parseInt(postId));
    return(
        <div className='container'>
            <h2 className='center'>{postExist.title}</h2>
            <img src={postExist.thumbnail} alt='thumbnail' />
            <p>{postExist.content}</p>
        </div>
    )
};

export default PostIdLink;


