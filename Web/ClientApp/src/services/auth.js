import axios from 'axios'

const ROOT_URL = 'http://localhost/api/auth'

const login = (user, password) => {
    let session = 'awesome'
    localStorage.setItem('accessToken', JSON.stringify(session));

    return new Promise((resolve, reject) => {
        resolve(session);
    });
}

const logout = () => {
    localStorage.removeItem('accessToken');
    return new Promise((resolve, reject) => {
        resolve(true);
    });
}

export const authService  = {
    login,
    logout
}