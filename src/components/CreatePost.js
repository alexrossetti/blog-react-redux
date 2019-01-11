import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatePost extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        const title = this.getTitle.value;
        const body = this.getBody.value;

        const data = {
            id: new Date(),
            title,
            body,
            editing: false
        }

        this.props.dispatch({
            type: 'ADD_POST', data
        });
        
        this.getTitle.value = '';
        this.getBody.value = '';
    }


    render() {
        return (
            <div className="create-post">
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        required
                        type="text"
                        ref={(input) => this.getTitle = input}
                        placeholder="Enter Post Title"
                    /><br /><br />
                    <textarea 
                        required
                        ref={(input) => this.getBody = input}
                        rows="5"
                        cols="20"
                        placeholder="Enter Post"
                    /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }

}

export default connect()(CreatePost);