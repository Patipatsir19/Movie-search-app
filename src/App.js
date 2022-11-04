import 'swiper/swiper.min.css';
import './App.scss';

import { Fragment } from 'react';

import Header from './component/header/header.component'
import Footer from './component/footer/footer.component';
import Navigate from './Routes/route.component';


function App() {
    return (
        <Fragment>
          <Header />
          <Navigate />
          <Footer />
        </Fragment>
    );
}

export default App;