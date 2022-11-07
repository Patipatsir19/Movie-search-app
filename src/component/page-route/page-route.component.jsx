import React from "react";

import "./page-route.styles.scss";

const PageRoute = props => {
  return (
    <div className="page-route">
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageRoute;
