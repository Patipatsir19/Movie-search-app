import React from "react";

import { Link } from "react-router-dom";

import Button from '../button/button.component';

import {category} from '../../API/tmdbApi';
import apiConfig from "../../API/apiconfig";

import './movie-card.styles.scss';

const MovieCard = props => {

    const item = props.item;

    const linkTo = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    return (
        <div>
            <Link to={linkTo}>
                <div className="movie-card" style={{backgroundImage:`url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
                </div>
                <h4>{item.title || item.name}</h4>
            </Link>

        </div>
    )
}

export default MovieCard;