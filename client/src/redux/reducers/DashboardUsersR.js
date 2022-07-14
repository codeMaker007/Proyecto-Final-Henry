import { USERS, FILTER_ADMIN, FILTER_BANNED } from "../actions/DashboardUsersA";
import { UPDATE_USER } from '../actions/DashboardUpdateUserA';

const initialState = {
    allUsers: [],
    usersBanned:[] ,
    usersAdmin: [],

}

const DashboardUsersR = (state = initialState, { type, payload }) => {
    switch (type) {
        case USERS:
            // console.log("Reducer", GET_NEWEST_PRODUCTS, payload)
            return {
                ...state,
                allUsers: payload

            }
        case UPDATE_USER:
            return {
                ...state,
                allUsers: payload
            }
         
        case FILTER_ADMIN:
            return {
                ...state,
                usersAdmin: payload
            } 


        case FILTER_BANNED:
            return {
                ...state,
                usersBanned: payload
            } 
    
        default:
            return state;
    }
}


export default DashboardUsersR;