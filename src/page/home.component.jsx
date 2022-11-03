import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/footer/footer.component";

const Home = () => {
    return (
        <div>
            Home
            <Footer />
            <Outlet/>
        </div>
    )
}

export default Home;