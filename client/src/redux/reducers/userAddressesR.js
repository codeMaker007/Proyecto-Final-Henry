import { POST_ADDRESS, USER_ADDRESSES } from "../actions/userAddressesA";

const initialState = {
    userAddresses: [],
}

const userAddressesR = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_ADDRESSES:
            return {
                ...state,
                userAddresses: payload
            }
            case POST_ADDRESS:
                return {
                    ...state,
                }
        default:
            return state;
    }
}
export default userAddressesR;