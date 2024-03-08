import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import Menu from './includes/Menu';

function MasterLayout({children}) {
    return (
        <>
            <Header/>
            {/* <Sidebar/> */}
            <Menu/>
            {children}
            <Footer/>
            
        </>
    );
}

export default MasterLayout;