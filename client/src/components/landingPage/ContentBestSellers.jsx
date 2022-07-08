import React from "react";
import { Grid } from '@mui/material';
import CardsLanding from './CardsLanding';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

export default function App({ products }) {

    return (
        <Grid container spacing={3} alignItems='center' justifyContent='center' >
            <Swiper
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                slidesPerView={5}
                spaceBetween={15}
                breakpoints={{
                    360: {
                        width: 360,
                        slidesPerView: 1,
                    },
                    370: {
                        width: 370,
                        slidesPerView: 1,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    920: {
                        width: 920,
                        slidesPerView: 3,
                    },
                }}
                slidesPerGroup={1}
                loop={(products.length > 6) ? true : false}
                loopFillGroupWithBlank={true}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper">
                {
                    products.map(e => {
                        return (
                            <SwiperSlide key={e.id * Math.random()}>
                                <CardsLanding
                                    id={e.id}
                                    name={e.name}
                                    price={e.price}
                                    category={e.categories}
                                    image={e.image}
                                    description={e.description}
                                    stock={e.stock}
                                    quantity={e.quantity}
                                    discount={e.discount}
                                    amountSold={e.amountSold}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Grid>
    );
}