import axios from 'axios'

//Actions 
const FETCH_DOCK = 'FETCH_DOCK'

//Reducers
export default dockReducer = (state= [], action ) => {
    switch(action.type) {
        case FETCH_DOCK : 
            return {
                ... state,
                dock: action.data
            };
        default:
            return state;
    }
}

//Action Creators
export function fetchDock(casid) {
    const request =  axios.get(`${ROOT_URL}/${casid}`);
    
    return {
        type : FETCH_DOCK,
        data: request
    }
}
