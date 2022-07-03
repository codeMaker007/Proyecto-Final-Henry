import React from 'react';
import axios from 'axios';
import { limpiarCarrito } from '../../redux/actions/carritoA';
import { useDispatch } from 'react-redux';

export default function PaypalForm({ data, total, setPago }) {
    const dispatch = useDispatch();
    let paypalRef = React.useRef();

    let dataPaypal = data.map(e => {
        return {
            name: e.name,
            description: e.description,
            quantity: e.quantity,
            unit_amount: {
                currency_code: 'USD',
                value: e.price
            }
        }
    });

    let reducirStock = data;
    // let precioDolar = Math.trunc(total / 130)
    console.log(dataPaypal)
    React.useEffect(() => {
        if (window.myButton) window.myButton.close();
        window.myButton = window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                items: dataPaypal,
                                amount: {
                                    currency_code: "USD",
                                    value: total,
                                    breakdown: {
                                        item_total: {
                                            currency_code: "USD",
                                            value: total
                                        }
                                    }
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    // const order = await actions.order.capture();
                    dispatch(limpiarCarrito());
                    reducirStock.forEach(e => {
                        axios.put(`/ProductDetail/${e.id}`, ({ stock: e.stock - e.quantity }))
                    })
                    // console.log(order);
                    setPago('exitoso')
                },
                onCancel: function (data, actions) {
                    console.log("Cancelaste la compra qlio");
                    dispatch(limpiarCarrito());
                    setPago('cancelado')

                },
                onError: err => {
                    console.error(err);
                    console.error('Error de paypal papá');
                }
            });
        window.myButton.render(paypalRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div ref={paypalRef} />
        </div>
    );
};