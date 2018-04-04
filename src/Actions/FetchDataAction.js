import axios from 'axios';

export const getInitialInfo = (userid) => {
    return {
        type: 'GET_INITIAL_INFO',
        payload:  axios.get(`http://localhost:8080/getinitialinfo/${userid}`)
                 .then((response) => {
                    return { response } 
                 })
                 .catch((error) => {
                    return { error }
                 })
        }
 };

export const getPostByTopic = (id) => {
    return {
          type: 'GET_POST',
          payload: axios.get(`http://localhost:8080/getpostsbyTopic/${id}`)
                 .then((response) => {
                     return { response } 
                 })
                 .catch((error) => {
                     return { error }
                 })
    }
};


export const getPostsByUser = (userid) => {
    return {
        type: 'GET_POST_BY_USER',
        payload: axios.get(`http://localhost:8080/getpostsbyUser/${userid}`)
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};

export const getUserDetails = (userid) => {
    return {
        type: 'GET_POST_BY_USER',
        payload: axios.get(`http://localhost:8080/getuserDetails/${userid}`)
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};


export const getVoterInfoByPost = (postid) => {
    return {
        type: 'GET_VOTER_INFO',
        payload: axios.get(`http://localhost:8080/getvoterinfobypost/${postid}`)
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};

export const getComments = (postid, limit) => {
    return {
        type: 'GET_COMMENTS',
        payload: axios.get(`http://localhost:8080/getcommentsbypost/${postid}/${limit}`)
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};

