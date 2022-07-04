import { USERS } from "../actions/DashboardUsersA";
import { UPDATE_USER } from '../actions/DashboardUpdateUserA';

const initialState = {
    allUsers: [],
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

        default:
            return state;
    }
}


export default DashboardUsersR;