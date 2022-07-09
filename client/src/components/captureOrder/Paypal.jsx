import React from 'react';
import axios from 'axios';
import { limpiarCarrito } from '../../redux/actions/carritoA';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PaypalForm({ data, total, setPago }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let paypalRef = React.useRef();

    function converter(cantidad) {
        let dolar = 0.0079;
        let resultado = (cantidad * dolar).toFixed(2)
        return resultado
    }

    let dataPaypal = data.map(e => {
        return {
            name: e.name,
            description: e.description,
            quantity: e.quantity,
            unit_amount: {
                currency_code: 'USD',
                value: converter(e.price)
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
                                    value: converter(total),
                                    breakdown: {
                                        item_total: {
                                            currency_code: "USD",
                                            value: converter(total)
                                        }
                                    }
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    dispatch(limpiarCarrito());
                    reducirStock.forEach(e => {
                        axios.put(`/ProductDetail/${e.id}`, ({ quantity: e.quantity }))
                    })
                    console.log(order);
                    navigate('/success');
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