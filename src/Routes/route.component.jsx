import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../page/home.component";
import Catalog from "../page/catalog.component";
import Detail from "../page/Detail.component";

const Navigate = () => {
  const element = useRoutes([
    {path:"/:category/search/:keyword", element: <Catalog/>},
    {path:"/:category/:id", element: <Detail/>},
    {path:"/:category", element: <Catalog/>},
    {path:"/", element:<Home/>}
  ])

  return element;
};

export default Navigate;
