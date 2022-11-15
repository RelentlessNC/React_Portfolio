import React from 'react';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Head from './components/Head';

function App() {
    return(
        <>
            <Head/>
            <Nav/>
            <Welcome/>
            <Footer/>
        </>
    )
}

export default App;