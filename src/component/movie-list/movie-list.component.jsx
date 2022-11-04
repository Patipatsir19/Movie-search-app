import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

import Button from '../button/button.component';

import tmdbApi, { category } from '../../API/tmdbApi'

import './movie-list.styles.scss'
import apiConfig from "../../API/apiconfig";

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
    },[])

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
                            <img src={apiConfig.w500Image(item.poster_path)} alt='' />
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