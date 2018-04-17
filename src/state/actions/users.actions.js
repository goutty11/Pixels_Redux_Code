import axios from 'axios';

import {
    PIXELS_API_URL,
    UPDATE_USER
} from '../../common/constants';

export const updateUser = (userId, firstName, lastName, mailId) => {
    return {
        type: UPDATE_USER,
        payload: axios.put(`${PIXELS_API_URL}/update_user`, {userId, firstName, lastName, mailId})
    }
};
