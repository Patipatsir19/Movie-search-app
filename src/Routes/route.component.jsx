import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../page/home.component";
import Catalog from "../page/catalog.component";
import Detail from "../page/Detail.component";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export default Navigate;
