import axios from 'axios';

export function loadCategories(locationId, orderType, accessToken) {
    return dispatch => {

        return axios.get(`https://api.flypaythis.com/v2/location/${locationId}/menu/${orderType}?accessToken=${accessToken}`).then(response => {
            dispatch({
                type: 'LOAD_CATEGORIES_DATA',
                payload: response.data.menus || {}
            });
        })
            .catch(error => {
                dispatch({
                    type: 'LOAD_CATEGORIES_DATA',
                    payload: error,
                    error: true
                });
            });
    };
}