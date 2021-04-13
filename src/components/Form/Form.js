import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onSubmit = (event) => {
        event.preventDefault();
    
        const data = {
          "form-name": "contact",
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          message: this.state.message,
          userEmail: this.state.userEmail,
          userTelefonNummber: this.state.userTelefonNummber
        };
    
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(this.createFormDataObj(data)).toString(),
        })
          .then(() => {
            this.setState({
              notification: "Daten wurden abgeschickt",
              sended: true,
            });
            // TODO Felder leeren
            console.log(this.state.notification)
          })
          .catch((error) => {
            console.log(error);
            this.setState({
              notification: "Fehlerlein... " + error,
              sended: true,
            });
            console.log(this.state.notification)
          });
      };
    render() { 
        return ( 

            <div className={styles.container}>
                <form name="contact" method="post" data-netlify="true" onSubmit={this.onSubmit}>
                    <input type="hidden" name="form-name" value="contact"/>

                    <div className={styles.inputField}>
                        <input type="text" name="name" placeholder="Name"></input>
                        <input type="text" name="phone" placeholder="Telefon"/>
                    </div>
                    <div className={styles.inputFieldMail}>
                        <input type="email" name="email" placeholder="E-Mail-Adresse"/>
                    </div>
                    <div className={styles.inputField}>
                        <textarea type="text" name="comments" placeholder="Nachricht"/>
                    </div>
                    
                    <button className={styles.submitButton} type="submit">Submit</button>
      
                    
                </form>
            </div>
         );
    }
}
 
export default Form;