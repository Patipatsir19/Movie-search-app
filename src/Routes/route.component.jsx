import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../page/home.component'
import Catalog from '../page/catalog.component';
import Detail from '../page/Detail.component';

const Routes = () => {
    return (
        <Routes>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Detail}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
        </Routes>
    );
}

export default Routes;