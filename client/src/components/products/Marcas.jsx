import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ products, setState, state }) {
    const [valueBrand, setValueBrand] = useState('AMD');

    const brands = products.map(e => e.brand)
    const brandsForRender = brands.filter((element, index) => { // Saco las marcas duplicadas acá!
        return brands.indexOf(element) === index;
    })

    const defaultProps = {
        options: brandsForRender,
        getOptionLabel: (option) => option
    };

    return (
        <Autocomplete
            {...defaultProps}
            onChange={(event, newValue) => { setState({ ...state, marcas: newValue }); setValueBrand(newValue); }}
            value={valueBrand}
            id="controlled"
            sx={{ width: 300 }}
            renderInput={(params) => (<TextField {...params} label="Marca" />)}
        />
    );
}

