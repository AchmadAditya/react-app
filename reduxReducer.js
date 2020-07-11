/* import React, { createContext } from 'react';
import { PostFormContext } from '../post_form';

export const PostContext = createContext();

class PostContextProvider extends React.Component {
    static contextType = PostFormContext;
    state = {
        posts: []
    };
    
    submittedPost = {
        title: '',
        content: '',
        thumbnail: null
    };

    submit = () => { 
        const post = this.state.posts;
        const { title, content, thumbnail } = PostFormContext;
        this.setState(post.push({title: title, content: content, thumbnail: thumbnail})) 
    };

    render() { 
        return ( 
           <PostContext.Provider value={{posts: this.state.posts, submit: this.submit}} >
               {this.props.children}
           </PostContext.Provider>
        );
    }
}
 
export default PostContextProvider; */





const initial = {
    posts: []
}

const reducer = (state = initial, action) => {
    switch (action.type) {
        case 'ADDED_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
    
        default:
            return state;
    }
};

export default reducer;