import React from "react";
import { useParams } from "react-router-dom";

import PageRoute from '../component/page-route/page-route.component';
import MovieGrid from "../component/showlist/showlist.component";

import { category as cate } from "../API/tmdbApi";

const Catalog = () => {

    const {category} = useParams();

    console.log(category)
    return (
        <div>
            <PageRoute>
                {category === cate.tv ? 'Series' : 'Movies'}
            </PageRoute>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </div>
    )
}

export default Catalog;