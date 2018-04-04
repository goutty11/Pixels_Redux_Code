import React, { Component } from 'react';
import { FetchData } from '../Actions/FetchDataAction';
import { connect } from 'react-redux';
import LandingPageListItem from './LandingPageListItem';
import store from '../store/configureStore';

import './LandingPageList.css';

const LandingPageList = ({result}) => {
    return (
        <div className="Landing">
            {result} 
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        result: state.result
    };
};

export default connect(mapStateToProps)(LandingPageList);