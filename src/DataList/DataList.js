import React from 'react';
import { connect } from 'react-redux';

const DataList = (props) => {
    console.log(props.data);
};

const mapStateToProps = (state) => {
    return {
        data: state.data
    };
} ;

export default connect(mapStateToProps)(DataList);