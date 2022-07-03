import { SEARCH_HISTORY } from "../actions/DashboardHistorySearchA";

const initialState = {
    allSearch: [],
}

const searchHistoryR = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_HISTORY:
          
            return {
                ...state,
                allSearch: payload
               
            }

        default:
            return state;
    }
}


export default searchHistoryR;
