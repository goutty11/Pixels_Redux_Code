import React, { Component } from 'react';
import Modal from 'react-modal';

import * as utils from '../../../common/utils';

import './UploadPost.css';

class UploadPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            fileContext: props.fileContext || null,
            description: ""
        }
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    upload() {
        // TODO: update the db with the new post details and close the modal
        this.closeModal();
    }

    cancel() {
        // TODO: delete the file from cloudinary and close the modal
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

    render() {
        return (
            <Modal 
                isOpen={this.state.modalIsOpen}
                contentLabel="Upload Post"
                onRequestClose={this.closeModal}
            >
                <div className="modal header"></div>
                <div className="modal content">
                    <div className="modal content image">
                        <img src={this.state.fileContext ? utils.updateCloudinaryUrlForSize(this.state.fileContext.url) : ""} />
                    </div>
                    <div className="modal content description">
                        <textarea className="description" placeholder="Add a Description here" onChange={this.onDescriptionChange.bind(this)}></textarea>
                    </div>
                </div>
                <div className="modal actions">
                    <span className="button cancel" onClick={this.cancel.bind(this)}>Cancel</span>
                    <span className="button upload" onClick={this.upload.bind(this)}>Upload</span>
                </div>
            </Modal>
        );
    }
}

export default UploadPost;