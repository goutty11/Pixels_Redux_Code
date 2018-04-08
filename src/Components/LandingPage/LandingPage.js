import React from 'react';
import { connect } from 'react-redux';
import PostsListItem from '../PostsListItem';
import InitialInformationItem from '../InitialInformation/InitialInformationItem';
import './LandingPage.css';

const LandingPageList = (props) => {
    return (
        <div className="Landing">
            {props.postdetails.map(post => {
                    return (
                        <PostsListItem key={post.post_id} {...post} />
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        postdetails: state.postdetail.postdetails,
        initialInformation : state.initialInformation.initialInformation
    };
};

export default connect(mapStateToProps)(LandingPageList);