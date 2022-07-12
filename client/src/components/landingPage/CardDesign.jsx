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
                image="https://i.ytimg.com/vi/bg58pqv3PUY/maxresdefault.jpg"
            />
            <CardContent sx={{ height: '50%', overflow: 'hidden' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Diseño
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign='justify'>
                    Equipos super potentes pensados para los trabajos relacionados al mundo del diseño grafico, arquitectura, ingenieria civil, etc. Disponen de mucha capacidad de procesamiento gráfico.
                </Typography>
            </CardContent>
        </Card>
    );
}
