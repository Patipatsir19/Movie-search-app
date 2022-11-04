import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../component/button/button.component";

import Slider from "../component/Slider/slider.component";
import MovieList from "../component/movie-list/movie-list.component";

import { category, movieType, tvType } from "../API/tmdbApi";

const Home = () => {
  return (
    <Fragment>
      <Slider />
      <div className="container">
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Trending Movie</h2>
            <Link to="/movie">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Top Rating</h2>
            <Link to="/movie">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Top Rating TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>

        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>On Air</h2>
            <Link to="/tv">
              <OutlineButton className="small">Show More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
