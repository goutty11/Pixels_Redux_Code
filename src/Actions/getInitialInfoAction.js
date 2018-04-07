import axios from 'axios';
import { GET_INITIAL_INFO } from '../common/constants';

export const getInitialInfo = (userid) => {
    return {
        type: GET_INITIAL_INFO,
        payload:  axios.get(`http://localhost:8080/getinitialinfo/${userid}`)
                 .then((response) => {
                    return { response } 
                 })
                 .catch((error) => {
                    return { error }
                 })
        }
 };

