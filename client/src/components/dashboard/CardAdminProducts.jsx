import React from "react";


export default function Card ({id, name, price, stock, discount, amountSold, description, categories, freeShipping, brand, image, disabled}){
    return (
        <div >

            <p >
            ID: {id}.
            
            PRODUCTO: { name}. 

            PRECIO: {price}.

            STOCK: {stock}.

            DESCUENTO: {discount}.

            CANT. VENDIDA: {amountSold}.

            CATEGORIAS: {categories}.

            MARCA: {brand}.
            
            ¿ENVIO GRATIS? {freeShipping}.
            
            IMAGEN: {image}.

            DESCRIPCIÓN: {description}.

            DESACTIVADO: {disabled}.

           </p>
            <button>Editar productos</button>
                      
        </div>
    );
}