// import { UPDATE_PRODUCT } from "../actions/DashboardUpdateProductA";

const initialState = {
    productoscreados: []

}

const createProductR = (state = initialState, action) =>{
    switch (action.type) {
       
        case "POST_POK":
            return {
                ...state,
                
            }
        
        case "CATALOGO":
            return {
                ...state,
                productoscreados: action.payload
        }

        case "UPDATE_PRODUCT":
            return {
                ...state,
                productoscreados: action.payload
            }
        default:
            return state; 
    }
}

export default createProductR;