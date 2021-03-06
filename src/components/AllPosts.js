import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditPost from './EditPost';

class AllPosts extends Component {

    render() {
        return (
            <div className="all-posts">
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditPost post={post} key={post.id} /> : <Post key={post.id} post={post} />}
                    </div>  
                ))}
                
                {console.log(this.props.posts)}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPosts);