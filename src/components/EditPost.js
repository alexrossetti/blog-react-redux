import React, { Component} from 'react';
import { connect } from 'react-redux';

class EditPost extends Component {

    handleEdit = (e) => {
        e.preventDefault();

        const newTitle = this.getTitle.value;
        const newBody = this.getBody.value;

        const data = {
            newTitle,
            newBody
        }

        this.props.dispatch({type: 'UPDATE', id: this.props.post.id, data: data});
    }

    render(){
        return (
            <div className="edit-post">
                <form onSubmit={this.handleEdit}>
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
                    <button>Update</button>
                </form>
            </div>
        );
    }

}


export default connect()(EditPost);