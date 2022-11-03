import 'swiper/swiper.min.css';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './component/header/header.component'


import Home from './page/home.component';

function App() {
    return (
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
    );
}

export default App;