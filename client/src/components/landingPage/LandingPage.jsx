import React, { Fragment, useEffect } from 'react';
import Carousel from './Carousel';
import style from './assets/LandingPage.module.css'
// import CardsLanding from './CardsLanding';
import CardsDiscounts from './CardsDiscounts';
import CardsNewestProducts from './CardsNewestProducts';
import CardsMostSelledProducts from './CardsMostSelledProducts';
import {useDispatch, useSelector} from "react-redux"
import  {getNewestProducts}  from '../../redux/actions/landingPageNewestA';
import  {getMostSelled}  from '../../redux/actions/landingPageMostSelledA';
import  {getDiscounts}  from '../../redux/actions/landingPageDiscountsA';
import axios from 'axios';
import {useAuth0} from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';
import { DashboardUsersA } from '../../redux/actions/DashboardUsersA';

const images = ['./assets/imagen1.jpg', './assets/imagen2.jpg', './assets/imagen3.jpg', './assets/imagen4.jpg'];



export default function LandingPage() {
    const dispatch = useDispatch()
    const newestProduct = useSelector ((state) => state.landingPageNewestR.newestProducts); 
    const mostSelledProduct = useSelector ((state) => state.landingPageMostSelledR.mostSelledProducts);
    const discount = useSelector ((state) => state.landingPageDiscountsR.discounts);
    const users = useSelector ((state) => state.DashboardUsersR.allUsers)
    // console.log ("Landing", newestProduct)
    
    useEffect(()=>{
        dispatch(DashboardUsersA())
        dispatch(getDiscounts());
        dispatch (getNewestProducts());
        dispatch(getMostSelled());   
    },[]) 

    const navigate = useNavigate()
    const {user, isAuthenticated} = useAuth0()

    if(isAuthenticated){
        let findedUser = users.find(x => x.email === user.email)
        console.log(findedUser);
        if(!findedUser){
            let obj = {
                name: user.name,
                username: user.nickname,
                email: user.email
            }
            axios.post('/user', obj)
            /* navigate('/profile') */
        }
    }

    return (
        <div className={style.body}>
            <Carousel images={images} />
            <div className={style.container}>
                <div className={style.section}>
                    <p className={style.title}>Ofertas</p>
                <div className={style.containerCards}>
                 
                    {discount.map(e => {

                        return(
                            <Fragment >
                            <CardsDiscounts
                                id={e.id}
                                key={e.id}
                                name={e.name}
                                price={e.price}
                                // category={e.category}
                                image={e.image}
                                // description={e.description}
                                // stock={e.stock}
                            />
                            </Fragment>
                        )
                    })} 
               
                </div>
                    <p className={style.title}>Nuevos productos</p>
           
                    <div className={style.containerCards}>
                 
                 
                
                    {newestProduct.map(e => {

                        return(
                            <Fragment >
                            <CardsNewestProducts
                                id={e.id}
                                key={e.id}
                                name={e.name}
                                price={e.price}
                                // category={e.category}
                                image={e.image}
                                // description={e.description}
                                // stock={e.stock}
                            />
                            </Fragment>
                        )
                    })} 
               
                </div>
                   
                <p className={style.title}>Productos mas vendidos</p>
           
           <div className={style.containerCards}>
        
        
             
                
                    {mostSelledProduct.map(e => {

                        return(
                            <Fragment >
                            <CardsMostSelledProducts
                                id={e.id}
                                key={e.id}
                                name={e.name}
                                price={e.price}
                                // category={e.category}
                                image={e.image}
                                // description={e.description}
                                // stock={e.stock}
                            />
                            </Fragment>
                        )
                    })} 
               
                </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
