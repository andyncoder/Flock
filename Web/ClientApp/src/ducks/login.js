import axios from 'axios'
import { authService } from '../../services/auth'
import { history } from '../../helpers/history'


//Actions 
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

//Reducers
export default loginReducer =  (state = [], action) => {
    console.log(action)
   switch(action){
       case LOGIN_REQUEST:
           return {
               ... state,
               user: action,
               authenticated : false
           }
       case LOGIN_SUCCESS:
           return {
               ... state,
               authenticated : true,
               token : action.token
           }
       default:
           return state; 
   }
}

//Action Creators
export function logon(user, pass) {

    const request = user => { return { type: LOGIN_REQUEST, user } }
    const success = auth => { return { type: LOGIN_SUCCESS, auth } }
    const failure = error => { return { type: LOGIN_ERROR, error } }
 
    return dispatch => {
        dispatch(request(user));

        authService.login(user, pass)
                   .then(auth => {
                     
                      dispatch(success(auth));
                      history.push('/');
                   },
                   error => {
                      dispatch(failure(error.toString()));
                   });
    }
}
