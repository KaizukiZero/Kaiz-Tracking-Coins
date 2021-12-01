import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';

const Layout =({children}) => {
        return (
            <React.Fragment>
            <Navbar/>
                {children}
            <Footer/>
            </React.Fragment>

        )
}
export default Layout;