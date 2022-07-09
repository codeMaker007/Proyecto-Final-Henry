import { USER_ORDER, USER_DETAIL} from "../actions/userOrderA";

const initialState = {
    userOrder: [],
    listOrder: [],
}

const userOrderR = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_ORDER:
            return {
                ...state,
                userOrder: payload
               
            }
        case USER_DETAIL:
            return {
                ...state,
                listOrder: payload
                
            }

        default:
            return state;
    }
}
export default userOrderR;