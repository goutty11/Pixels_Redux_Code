import {
    GET_TOPIC_PENDING,
    GET_TOPIC_FULFILLED,
    GET_TOPIC_REJECTED
} from '../../common/constants';


const currentTopicDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    // currentTopic: {
    //     "topic_id": null,
    //     "topic_title": null, 
    //     "topic_by": null,
    //     "start_time": null,
    //     "end_time": null
    // }
    data:[]
};


export const topicInfo = (state = currentTopicDefaultState, action) => {
    switch (action.type) {
        case GET_TOPIC_PENDING:
            return { ...state, fetching: true };
        case GET_TOPIC_FULFILLED:
            return { ...state, fetching: false, data: action.payload.data };
        case GET_TOPIC_REJECTED:
            return { ...state, fetching: false, error: action.payload.data.error };
        default:
            return state;
    }
};