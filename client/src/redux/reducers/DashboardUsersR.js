import { USERS } from "../actions/DashboardUsersA";

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

        default:
            return state;
    }
}


export default DashboardUsersR;