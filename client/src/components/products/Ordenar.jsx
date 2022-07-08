import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { orderByPrice } from '../../redux/actions/productsA';
import { useDispatch } from 'react-redux';

export default function SelectSmall() {
    const [orden, setOrden] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderByPrice(orden));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orden])


    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" >
            <InputLabel id="demo-select-small" >Orden</InputLabel>
            <Select
                style={{ fontSize: 15 }}
                labelId="demo-select-small"
                id="demo-select-small"
                value={orden}
                label="orden"
                onChange={(e) => setOrden(e.target.value)}
            >
                <MenuItem value='Mas vendido'>Mas vendido</MenuItem>
                <MenuItem value='ASC'>Precio, menor a mayor</MenuItem>
                <MenuItem value='DESC'>Precio, mayor a menor</MenuItem>
                <MenuItem value='A-Z'>Alphabeticamente, A-Z</MenuItem>
                <MenuItem value='Z-A'>Alphabeticamente, Z-A</MenuItem>
            </Select>
        </FormControl>
    );
}
