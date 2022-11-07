import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import tmdbApi from "../../API/tmdbApi";
import apiConfig from "../../API/apiconfig";

const CastList = (props) => {
  const { category } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCredit = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCast(response.cast.slice(0, 5));
    };
    getCredit();
  }, [category, props.id]);
  return (
    <div className="casts">
      {cast.map((item, i) => (
        <div className="casts_item" key={i}>
          <div
            className="casts_item_img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts_item_name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
