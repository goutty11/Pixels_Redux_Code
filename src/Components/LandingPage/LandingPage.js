import React from 'react';
// import { FetchData } from '../../Actions/FetchDataAction';
import { connect } from 'react-redux';
import LandingPageListItem from '../LandingPageListItem';


import './LandingPage.css';

// const LandingPageList = (props) => {
//     return (
//         <div className="Landing">
//             {props.voterdetails} 
//         </div>
//     );
// };

// const mapStateToProps = (state) => {
//     return {
//         voterdetails: state.voterdetails
//     };
// };

// export default connect(mapStateToProps)(LandingPageList);


const LandingPageList = (props) => {
    return (
        <div className="Landing">
            {props.postdetails.map(post => {
                    return (
                        <LandingPageListItem key={post.post_id} {...post} />
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        postdetails: state.postdetails,
    };
};

export default connect(mapStateToProps)(LandingPageList);