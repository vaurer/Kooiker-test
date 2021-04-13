import React, { Component } from 'react';
import Form from '../Form/Form';
import styles from './Contact.module.css';

class Contact extends Component {
    state = {}
    render() {
        return (
            <div>  
                <div>
                <iframe 
                title="GoogleMap" 
                src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d11540.194209343405!2d0.0047!3d43.688754!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d43.6902871!2d0.004663!5e0!3m2!1sde!2sus!4v1616435576475!5m2!1sde!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
                </iframe>
                </div>
                <div className={styles.headerKontakt}>
                <h1>Kontakt</h1>
                </div>
                
                <div className={styles.contact2}>
                    <div className={styles.mailContact}>
                        <p>Chemin de Lanegrand; 32400 Fustérouau</p>
                        <a className={styles.iFrame} href = "mailto: helga-henny@kooiker-fr.com">
                        <i  className="far fa-envelope"> </i>
                        helga-henny@kooiker-fr.com
                        </a>
                    </div>
                     <Form/>
                </div>

            </div>
        );
    }
}

export default Contact;