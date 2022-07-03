import axios from "axios";
export const ADD_USER = 'ADD_USER';

export const addUserDb = (user) => {
    return async function () {
        return await axios.post('/user', user)
    }
}