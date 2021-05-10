import React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';


const NotFound = () => {
    return (
        <div className="container-md">
            <Navigation />
            <h1>Erreur 404</h1>
            <Footer />
        </div>
    );
};

export default NotFound;