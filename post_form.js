import React from 'react';
import { connect } from 'react-redux';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            thumbnail: null
        };

        this.changeTitle = this.changeTitle.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.changeThumbnail = this.changeThumbnail.bind(this);
        this.submitted = this.submitted.bind(this);
    };
    
    changeTitle(e) {
        this.setState({title: e.target.value})
    };
    
    changeContent(e) {
        this.setState({content: e.target.value})
    };
    
    changeThumbnail(e) {
        this.setState({thumbnail: e.target.value})
    };

    submitted(e) {
       this.props.addPost(this.state.title, this.state.content, this.state.thumbnail);
       this.setState({title: '', content: '', thumbnail: null})
    }

    render() {
        return(
            <div className="container left">
                <label className='black-text'>Post Title :</label> <br/>
                <input type="text" placeholder='Title...' style={{width: 250}} value={this.state.title} onChange={this.changeTitle} /> <br/>
                <label className='black-text'>Post Content :</label> <br/>
                <textarea placeholder='Content...' style={{width: 250}} value={this.state.content} onChange={this.changeContent} /> <br/>
                <label className="black-text">Post Thumbnail :</label> <br/>
                
                <span className="btn btn-file orange darken-3">
                    <i className="material-icons left">cloud_upload</i>
                    Select File<input type="file" value={this.state.thumbnail} onChange={this.changeThumbnail} />
                </span> <br/>
                
                <br/> <br/>
                <button onClick={this.submitted} className='btn green waves-effect light'>Submit Here</button>
            </div>
        )
    }
};


const mapStatetoProps = (state) => {
    return {
        posts: state.posts
    }
}

let nextPostId = 0
export const addPost = (title, content, thumbnail) => ({
  type: 'ADDED_POST',
  post: {
    id: ++nextPostId,
    title: title,
    content: content,
    thumbnail: thumbnail
  }
})

/* const mapDispatchtoProps = (dispatch) => {
    return {
        addPost: (title, content, thumbnail) => { dispatch({type: 'ADDED_POST', post: {title: title, content: content, thumbnail: thumbnail}}) }
    }
} */


export default connect(mapStatetoProps, { addPost })(PostForm);