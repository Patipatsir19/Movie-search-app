import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../page/home.component";
import Catalog from "../page/catalog.component";
import Detail from "../page/detail/Detail.component";

const Navigate = () => {
  const element = useRoutes([
    {path:"/search/:category/:keyword", element: <Catalog/>},
    {path:"/:category/:id", element: <Detail/>},
    {path:"/:category", element: <Catalog/>},
    {path:"/", element:<Home/>}
  ])

  return element;
};

export default Navigate;
