import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: '100%', height: '100%' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="50%"
                image="https://ak.picdn.net/shutterstock/videos/4636655/thumb/4.jpg"
            />
            <CardContent sx={{ height: '50%', overflow: 'hidden' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Oficina
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign='justify'>
                    Equipos de escritorio menos potentes que los Gamer o de diseño pero pensados para el uso diario de oficina, suelen consumir menos energía como pueden estar meses encendidos.
                </Typography>
            </CardContent>
        </Card >
    );
}
