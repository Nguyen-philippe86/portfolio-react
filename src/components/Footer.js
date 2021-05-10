import React from 'react';

const Footer = () => {
    return (
        <div className="containerFooter">
            <div className="copyright">
                Tous droit réservés © Philippe Nguyen
            </div>
            <div className="contactInfo">
                <i className="fas fa-phone-alt"> <a href="tel:+33608081033"> 06 08 08 10 33</a></i> |
                <i className="fas fa-paper-plane"> <a href="mailto: contact@philippe-nguyen.com">
                        contact@philippe-nguyen.com</a></i>
            </div>
        </div>
    );
};

export default Footer;