import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../component/button/button.component";

import Slider from "../component/Slider/slider.component";

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
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
