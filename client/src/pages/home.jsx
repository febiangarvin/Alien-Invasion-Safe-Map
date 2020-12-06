import React from 'react';

// // ----- COMPONENTS ----- // //
import Header from '../components/home/header'
import MainMap from '../components/map/mainMap'
import InfoWilayahTable from '../components/home/infoWilayahTable';
import Footer from '../components/home/footer';

/*
- me-return semua component untuk homepage utama
*/
const Home = () => {
    return (
        <div>
            <Header />
            <MainMap />
            <InfoWilayahTable />
            <Footer />
        </div>
    )
}

export default Home