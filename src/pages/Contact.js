import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';


const Contact = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
        let mail = document.getElementById('not-email')
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            mail.style.display = 'none';
            return true;
        } else {
            mail.style.display = 'block';
            mail.style.animation = 'dongle 1s';
            setTimeout(() => {
                mail.style.animation ='none';
            }, 1000)
            return false;
        }
    }

    const failMessage = (message) => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = message;
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(255,69,0)';
        formMess.style.animation = 'dongle 1s';

        document.getElementById('name').classList.add('error');
        document.getElementById('email').classList.add('error');
        document.getElementById('message').classList.add('error');
    }

    const successMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = 'Merci, votre message a bien été envoyé !'
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(30, 144, 255)';

        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('message').classList.remove('error');

        setTimeout(() => {
            formMess.style.opacity ='0';
        }, 5000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( name && isEmail() && message){
            sendFeedback("template_pl3msce", {
            name,
            phone,
            email,
            message,
            });
        } else {
            failMessage('Merci de remplir les champs requis *');
        }
    };

    const sendFeedback = (templateId, variables) => {

        window.emailjs
        .send("service_tvlaflg", templateId, variables)
        .then((res) => {
            successMessage();
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
        })
        .catch(
            (err) =>{
                failMessage("Une erreur s'est produite, veuillez réessayer.")
            }
        )
    };

    const Tilt = (props) => {
        const { options, ...rest } = props;
        const tilt = useRef(null);
    
        useEffect(() => {
        VanillaTilt.init(tilt.current, options);
        }, [options]);
    
        return <div ref={tilt} {...rest} />;
    }

    const options = {
        speed: 1000,
        max: 30
    };

    return (
        <div>
                <div className="containerContact">
                    <h1 className="titleAllSite" data-aos="fade-down">Contact</h1>
                    <div className="contentContact">
                        <div className="boxInfo" data-aos="fade-right">
                            <Tilt options={options}>
                                <h3>Mes coordonnées</h3>
                                <div className="logoInfo">
                                    <i className="fas fa-phone-alt">&nbsp;&nbsp;|<a href="tel:+33608081033"> 06 08 08 10 33</a></i>
                                    <i className="fas fa-paper-plane">&nbsp;&nbsp;|<a href="mailto: contact@philippe-nguyen.com">contact@philippe-nguyen.com</a></i>
                                </div>
                                <div className="logoSocial">
                                    <a href="https://www.linkedin.com/in/philippe-nguyen-web-dev/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/Nguyen-philippe86" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                                    <a href="https://www.facebook.com/koo.nguyen93" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                                </div>
                            </Tilt>
                        </div>
                        <div className="boxForm" data-aos="fade-left">
                            <form>
                                <h3>Formulaire de contact</h3>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    <input type="text" id="name" name="name" placeholder="Nom & Prénom*" aria-label="prenom" className="form-control" onChange={(e) => setName(e.target.value)} value={name}/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-phone-alt"></i></span>
                                    <input type="number" className="form-control" placeholder="Téléphone" name="phone"
                                        aria-label="telephone" aria-describedby="addon-wrapping" onChange={(e) => setPhone(e.target.value)} value={phone}/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="addon-wrapping"><i className="fas fa-at"></i></span>
                                    <label id="not-email">Email non valide</label>
                                    <input type="email" id="email" className="form-control" placeholder="Email*" name="email" aria-label="email"
                                        aria-describedby="addon-wrapping" onChange={(e) => setEmail(e.target.value)} value={email}/>
                                </div>
                                <div className="input-group mb-3 areaZone">
                                    <span className="input-group-text"><i className="fas fa-comment-dots"></i></span>
                                    <textarea className="form-control" id="message" name="message" placeholder="Message*" aria-label="With textarea" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                                </div>
                                <div className="btnForm">
                                    <input className="button" type="button" value="Envoyer" onClick={handleSubmit}/>
                                </div>
                                <div className="form-message"></div>
                            </form>
                        </div>
                    </div>
                </div>   
        </div>
    );
};

export default Contact;