import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ productsCopy, setState, state }) {
    const [inputValue, setInputValue] = useState('');

    const brands = productsCopy.map(e => e.brand)
    const brandsForRender = brands.filter((element, index) => { // Saco las marcas duplicadas acá!
        return brands.indexOf(element) === index;
    })
    const [valueBrand, setValueBrand] = useState(null);

    return (
        <Autocomplete
            defaultValue={null}
            value={valueBrand}
            onChange={(event, newValue) => {
                setState({ ...state, marcas: newValue });
                setValueBrand(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={brandsForRender}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Marcas" />}
        />
    );
}

