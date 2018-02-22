
import axios from 'axios';
import { 
    CONTACTS_FETCH_SUCCESS,
} from './types';

export const contactsFetch = () => (dispatch) => {
        axios.get('http://api.androidhive.info/contacts/')
        .then((response) => {
            console.log(response);
            dispatch({ type: CONTACTS_FETCH_SUCCESS, payload: response.data.contacts });
        })
        .catch((error) => {
            console.log(error);
        });
};
