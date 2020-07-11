import React from 'react';
import PostForm from './post_form';

function Post() {
    return(
        <div className="container">
            <h3>Post</h3>
            <p>Please fill the form below to post :</p>

            {/* insert form component */}
            <PostForm />

        </div>
    )
};

export default Post;
