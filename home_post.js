import React from 'react';
import { Link, /* Switch, Route, withRouter, useParams, */ BrowserRouter } from 'react-router-dom';
import { connect, /* useSelector */ } from 'react-redux';
/* import PostIdLink from './home_post_details';
 */
class Postcard extends React.Component {
    render() { 
        const posts = [...this.props.posts];
        const postlist = posts.length ? (
            posts.map((value, index) => {
                return(
                    <div className="card">
                        <div className="card-img">
                            {/* access post thumbnail */}
                            <img key={posts.id} src={posts[index].thumbnail} alt="thumbnail"/>
                        </div>

                        <div className="card-content">
                            <span key={posts.id} className="card-title">{posts[index].title}</span>    {/* access post title */}
                            <p className='truncate' key={posts.id}>{posts[index].content}</p>
                        </div>

                        <div className="card-action">
                            <Link key={posts.id} to={`/${posts[index].id}`} /* target='_top' */ >More Details...</Link>   {/*access post link*/}
                        </div>
                    </div>
                )
            })
        ): (
            <p>No posts. Please go to the post section to post</p>
        )
        return (
                <div className="row">
                    <div className="col s12 l6 xl6">
                        {postlist}
                    </div>

                   {/*  <Switch>
                        
                    </Switch> */}
                </div>
        );
    }
}

const mapState = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapState)(Postcard);