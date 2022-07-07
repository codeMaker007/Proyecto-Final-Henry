import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: '100%', height: '100%' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="50%"
                image="https://tecnobits.net/wp-content/uploads/2020/03/como-armar-una-pc-gamer-gama-alta.jpg"
            />
            <CardContent sx={{ height: '30%', overflow: 'hidden' }}>
                <Typography gutterBottom variant="h5" component="div">
                    Gamer
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign='justify'>
                    ¿Qué son?, son equipos de escritorio diseñados específicamente para reproducir videojuegos con la misma o mayor calidad que las consolas convencionales.
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', height: '10%' }}>
                {/* <Button size="small">Share</Button> */}
                <Button variant='outlined' size="medium">Comprar</Button>
            </CardActions>
        </Card>
    );
}
