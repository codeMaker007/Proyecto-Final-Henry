import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import carrito from './reducers/carritoR';
import products from './reducers/productsR';
import detailProduct from './reducers/detailProductR';
import productoscreados from './reducers/createProductR';
import users from './reducers/createUsers'
import favoritos from './reducers/favoritosR';
import PerfilDelUsuarioR from './reducers/PerfilDelUsuarioR';
import landingPageNewestR from './reducers/landingPageNewestR';
import landingPageMostSelledR from './reducers/landingPageMostSelledR';
import landingPageDiscountsR from './reducers/landingPageDiscountsR';
import adminProductsR from './reducers/adminProductsR';
import DashboardUsersR from './reducers/DashboardUsersR';
import searchHistoryR from './reducers/DashboardHistorySearchR';
import historyShoppingR from './reducers/DashboardHistoryShoppingR';
import UpdateProductR from './reducers/DashboardUpdateProductR';




const reducer = combineReducers({
    carrito,
    products,
    detailProduct,
    productoscreados,
    users,
    favoritos,
    PerfilDelUsuarioR,
    landingPageNewestR,
    landingPageMostSelledR,
    landingPageDiscountsR,
    adminProductsR,
    DashboardUsersR,
    searchHistoryR,
    historyShoppingR,
    UpdateProductR,

})

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

