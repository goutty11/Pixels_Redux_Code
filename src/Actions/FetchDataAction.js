import axios from 'axios';


// const ROOT_URL = 'https:www.metaweather.com/api/location/44418/';

const ROOT_URL = 'http://localhost:8080/getallposts';

const GET_POST_URL = 'http://localhost:8080/getpostsbyid/12';

export const FetchData = () => {
    
    //const value = axios.get(ROOT_URL);

      const value = () => { 
          return axios.get(ROOT_URL)
            .then(function(response)  {
                return response.data.consolidated_weather[0].min_temp;
          });
      }
    //  axios.get(ROOT_URL).then(function(response){
    //      console.log(response.data.consolidated_weather[0].min_temp);
    //  })
    
    return {
        type: 'FETCH_DATA',
        payload: axios.get(ROOT_URL)
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
                // axios.get('http://localhost:8080/getcommentsbypost', {
                //     params : {
                //         postid: postid,
                //         limit: limit
                //     }
                // })
                .then((response) => {
                    return { response } 
                })
                .catch((error) => {
                    return { error }
                })
    }
};

// export const getPostByTopic = (id) => {
//     axios.get(`http://localhost:8080/getpostsbyTopic/${id}`)
//         .then((response) => {
//             dispatch({ type: 'GET_POST', payload: response.data})
//         })
//         .catch(error => { 
//             dispatch({ type: 'error', payload: error})
//         }
//     )    
//     return {
//         type: 'GET_POST',
//         payload: datvalue.then((result) => {
//             return { result };
//         }).catch((err) =>
//             {throw err;})
//     }
// };


// export const getPostByTopic = (id) => {
//      return (dispatch) => {
//          return axios.get(`http://localhost:8080/getpostsbyTopic/${id}`)
//              //.then(response => response.data)
//              .then(response => {
//                  dispatch({
//                      type: 'GET_POST',
//                      payload: response.data
//                  });
//              }) 
//          }
//  };






