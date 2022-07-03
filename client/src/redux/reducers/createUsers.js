import {ADD_USER} from '../actions/createUsers';

const initialState = {
    userCreated: []
};

const userCreated = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_USER:
            return {
                ...state,
            }
        default:
            return state;

    }

}
export default userCreated;