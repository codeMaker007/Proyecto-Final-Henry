// import React, { useState, useEffect } from 'react';
// import FormControl from '@mui/material/FormControl';
// import InputAdornment from '@mui/material/InputAdornment';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import SendIcon from '@mui/icons-material/Send';

// export default function RangeSlider({ setState, state }) {
//     const [minimo, setMinimo] = useState(0);
//     const [maximo, setMaximo] = useState(0);

//     useEffect(() => {
//         setMinimo(state.minimo)
//         setMaximo(state.maximo)
//     }, [state])


//     function submit() {
//         setState({ ...state, minimo: minimo, maximo: maximo })
//     }

//     return (
//         <>
//             <FormControl sx={{ m: 1, width: '30%' }} variant="standard">
//                 <InputLabel htmlFor="standard-adornment-amount">Minimo</InputLabel>
//                 <Input
//                     id="standard-adornment-amount"
//                     value={minimo}
//                     onChange={(e) => setMinimo(Number(e.target.value))}
//                     startAdornment={<InputAdornment position="start">$</InputAdornment>}
//                 />
//             </FormControl>
//             <FormControl sx={{ m: 1, width: '30%' }} variant="standard">
//                 <InputLabel htmlFor="standard-adornment-amount">Maximo</InputLabel>
//                 <Input
//                     id="standard-adornment-amount"
//                     value={maximo}
//                     onChange={(e) => setMaximo(Number(e.target.value))}
//                     startAdornment={<InputAdornment position="start">$</InputAdornment>}
//                 />
//             </FormControl>
//             <SendIcon onClick={() => submit()} sx={{ marginTop: 2.5, cursor: 'pointer' }} />
//         </>
//     );
// }
import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import SendIcon from '@mui/icons-material/Send';
import { useSnackbar } from 'notistack';

export default function RangeSlider({ setState, state }) {
    const { enqueueSnackbar } = useSnackbar();
    const [minimo, setMinimo] = useState(0);
    const [maximo, setMaximo] = useState(0);

    useEffect(() => {
        setMinimo(state.minimo)
        setMaximo(state.maximo)
    }, [state])


    function submit() {
        if (minimo < 1) return enqueueSnackbar('El minimo no puede ser menor a 1', { variant: 'error' });
        else if (maximo > 300000) return enqueueSnackbar('El maximo no puede ser mayor a 300mil', { variant: 'error' });
        else if (maximo < minimo) return enqueueSnackbar('El maximo no puede ser menor al minimo', { variant: 'error' });
        setState({ ...state, minimo: minimo, maximo: maximo })
    }

    return (
        <>
            <FormControl sx={{ m: 1, width: '30%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Minimo</InputLabel>
                <Input
                    type='number'
                    id="standard-adornment-amount"
                    value={minimo}
                    onChange={(e) => setMinimo(Number(e.target.value))}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '30%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Maximo</InputLabel>
                <Input
                    type='number'
                    id="standard-adornment-amount"
                    value={maximo}
                    onChange={(e) => setMaximo(Number(e.target.value))}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <SendIcon onClick={() => submit()} sx={{ marginTop: 2.5, cursor: 'pointer' }} />
        </>
    );
}