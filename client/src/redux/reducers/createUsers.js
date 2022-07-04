import {ADD_USER} from '../actions/createUsers';
import {UPDATE_USER} from '../actions/DashboardUpdateUserA';

const initialState = {
    userCreated: []
};

const userCreated = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_USER:
            return {
                ...state,
            }

        case UPDATE_USER:
            return {
                ...state,
                userCreated: payload
            }

        default:
            return state;

    }

}
export default userCreated;