import axios from "axios";

export const MOST_SELLED_PRODUCTS = 'MOST_SELLED_PRODUCTS';

export const  getMostSelled = ()=> {
    return async function (dispatch) {
        var json = await axios.get('/newestProducts'); //PONER LA RUTA DE LOS PRODUCTOS MAS VENDIDOS /bestSellingProducts
        // console.log ("acciones",json.data)
        return dispatch({
            type: MOST_SELLED_PRODUCTS,
            payload: json.data,
            
        })
    }
}