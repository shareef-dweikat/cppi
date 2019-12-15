import React from 'react';
import './contact.css'

import ContactForm from '../../components/contactForm/ContactForm';

function Contact() {
   
   return (
        <div className="contact-background">
        {/* <a name="Contact"></a> */}
          {/* <h1
           style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:60}}
          >
            Contact Us Today
            </h1> */}
               {/* <Form backgroundColor={'rgba(0,0,0,0.0)'}/> */}
                <ContactForm/>
              
        </div>
  );
}

export default Contact;


