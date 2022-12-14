import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';

import MovieCard from "../movie-card/movie-card.component";

import tmdbApi, { category } from '../../API/tmdbApi'

import './movie-list.styles.scss'

const MovieList = props => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let res = null
            const params = {}

            if(props.type !== 'similar') {
                switch(props.category){
                    case category.movie:
                        res = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                        default: res = await tmdbApi.getTvList(props.type, {params});
                }
            }else {
                res = await tmdbApi.similar(props.category, props.id)
            }
            setItems(res.results);
        }
        getList();
    },[props.type, props.category, props.id])

    return (
        <div className="movie-list">
            <Swiper 
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

MovieList.propsType = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;