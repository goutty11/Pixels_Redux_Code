import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as utils from '../../../common/utils';
import store from '../../../state/store';
import { addPost, getPostByTopic } from '../../../state/actions/posts.actions';
import { getPostsByTopic } from '../../../state/actions/posts.actions';

import './UploadPost.css';


class UploadPost extends Component {

    constructor(props) {
        super(props);

        let url;
        this.state = {
            modalIsOpen: false,
            fileContext: props.fileContext || null,
            description: "Dude",
            userId: this.props.userId,
            topicId: this.props.topicId,
            nextTopic: "Man"

        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    upload() {
        // TODO: update the db with the new post details and close the modal
        store.
            dispatch(addPost(this.state.userId,
                              this.state.topicId, 
                              utils.updateCloudinaryUrlForSize(this.state.fileContext.url),
                              this.state.description,
                              this.state.nextTopic))
                              .then(() => {
                                        store.dispatch(getPostByTopic(this.state.topicId, this.state.userId))
                                        .catch((error) => {
                                            console.log(error)
                                        });
                                })
            this.closeModal();
    }

    cancel() {
        // TODO: delete the file from cloudinary and close the modal
        // this.setState({ modalIsOpen: false });
        this.closeModal();
    }

    showModal(fileContext) {
        if (fileContext) {
            this.setState({
                ...this.state,
                modalIsOpen: true,
                fileContext
            })
        } else {
            this.setState({ modalIsOpen: true });
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    onDescriptionChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    onTopicChange(e) {
        this.setState({
            ...this.state,
            nextTopic: e.target.value
        })
    }

    render() {
        return (
            <Modal 
                isOpen={this.state.modalIsOpen}
                contentLabel="Upload Post"
                //onRequestClose={this.closeModal}
                className="modal"
            >
                <div className="modal-content-image">
                    <img src={this.state.fileContext ? utils.updateCloudinaryUrlForSize(this.state.fileContext.url) : ""} />
                </div>
                <div className="post-information">
                    <div className="description">
                        <textarea placeholder="Describe your post" onChange={this.onDescriptionChange.bind(this)}></textarea>
                    </div>
                    <div className="next-topic">
                        <input type="text" placeholder="Enter your next Topic" onChange={this.onTopicChange.bind(this)}></input>
                    </div>
                </div>
                <div className="modal-actions">
                    <span className="button-cancel" onClick={this.cancel.bind(this)}>Cancel</span>
                    <span className="button-upload" onClick={this.upload.bind(this)}>Upload</span>
                </div>
            </Modal>
        );
    }
}

//const mapStateToProps = (state) => state;

//export default connect(mapStateToProps)(UploadPost);

export default UploadPost;