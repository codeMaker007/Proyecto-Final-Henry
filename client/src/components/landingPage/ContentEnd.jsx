import React from "react";
import { Grid } from '@mui/material';
import CardsContentEnd from './CardsContentEnd';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function App({ products }) {

    return (
        <Grid container spacing={2} alignItems='center' justifyContent='center' >
            {
                products.map(e => {
                    return (
                        <Grid key={e.id * Math.random()} item xs={6} sm={3} md={4} lg={2}>
                            <CardsContentEnd
                                id={e.id}
                                name={e.name}
                                price={e.price}
                                category={e.categories}
                                image={e.image}
                                stock={e.stock}
                                averageScore={e.averageScore}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}
