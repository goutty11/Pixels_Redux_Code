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


export const getPostById = (id) => {
    return {
        type: 'GET_POST',
        payload: axios.get(`http://localhost:8080/getpostsbyid/${id}`)
    }
};






