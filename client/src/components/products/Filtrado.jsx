import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { orderByPrice } from '../../redux/actions/productsA';


function Filtrado({ orderByPrice }) {
    const [state, setState] = useState({
        price: ''
    })

    useEffect(() => {
        if (state.price.length > 2) orderByPrice(state.price)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])


    return (
        <div>
            <form>
                <label htmlFor='asc/desc'>
                    <select value={state.order} onChange={(e) => setState({ ...state, price: e.target.value })}>
                        <option value={''}>Precio</option>
                        <option value='ASC'>[Ascendente]</option>
                        <option value='DESC'>[Descendente]</option>
                    </select>
                </label>
            </form>
        </div>
    )
}

export default connect(null, { orderByPrice })(Filtrado)