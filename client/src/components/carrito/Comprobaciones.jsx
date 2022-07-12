import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import DatosPersonales from './DatosPersonales';
import DatosDireccion from './DatosDireccion';
import { userAddressesA } from '../../redux/actions/userAddressesA';



export default function Comprobaciones({ personalData, setPersonalData, addressData, setAddressData }) {
    const adress = useSelector((state) => state.userAddressesR.userAddresses);
    const theme = useTheme();
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = React.useState(0);
    let usuario = JSON.parse(localStorage.getItem('usuario'));

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [
        {
            label: 'Datos personales',
            description: (<div>
                <DatosPersonales personalData={personalData} setPersonalData={setPersonalData} />
            </div>),
        },
        {
            label: 'Configuración de envío',
            description: (<div>
                <DatosDireccion adress={adress} addressData={addressData} setAddressData={setAddressData} />
            </div>),
        },
    ];

    useEffect(() => {
        dispatch(userAddressesA(usuario.id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const maxSteps = steps.length;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    borderTop: 'solid',
                    borderBottom: 'solid',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: '#e1e1e1'
                }}
            >
                <Typography>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 400, width: '100%', p: 1, marginLeft: -20 }}>
                {steps[activeStep].description}
            </Box>
            <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Siguiente
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Volver
                    </Button>
                }
            />
        </Box>
    );
}
