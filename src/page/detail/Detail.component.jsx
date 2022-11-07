import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../API/tmdbApi";
import apiConfig from "../../API/apiconfig";

import CastList from './Castlist.component'
import VideoList from "./video.component";
import MovieList from '../../component/movie-list/movie-list.component';

import "./Detail.styles.scss";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <div>
      {item && (
        <div>
          <div
            className="banner"
            style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content_poster">
              <div className="movie-content_poster_img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}>

              </div>
            </div>
            <div className="movie-content_info">
                <div className="title">
                  {item.title || item.name}
                </div>
                <div className="genres">
                  {
                    item.genres && item.genres.slice(0,5).map((gen, i) => (
                      <span key={i}>{gen.name}</span>
                    ))
                  }
                </div>
                <p className="overview">{item.overview}</p>
                <div className="section_header">
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section_header mb-2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
