import { 
    GET_POSTS_BY_TOPIC_FULFILLED,
    GET_POSTS_BY_TOPIC_PENDING,
    GET_POSTS_BY_TOPIC_REJECTED
} from '../common/constants';

const postdetailstate = {
    fetching: false,
    fetched: false,
    error: null,
    postdetails:[]
};

const ProcesspostDetail = (posts) => {
    return posts.map(post => {
        return post;
    })
}

export const getPostsByTopicReducer = (state=postdetailstate, action) => {
    switch(action.type){
        case GET_POSTS_BY_TOPIC_PENDING:
            return{
                ...state,
                fetching: true
            };
        case GET_POSTS_BY_TOPIC_FULFILLED:
            return {
                ...state,
                fetching: false,
                postdetails: ProcesspostDetail(action.payload.response.data.result[0])
            };
        case GET_POSTS_BY_TOPIC_REJECTED:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
        }
    };

