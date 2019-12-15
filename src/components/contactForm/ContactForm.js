import React from 'react';
 import './contactform.css'



class  ContactForm extends React.Component {
   
    render(){
       
           
    return ( 

     <div className="contact-form-background">
            <div className="form-padding">
                    <h1 className="contact-us-title">CONTACT US</h1>
                            
                    <form action="https://formspree.io/Thesacredcuisine@gmail.com" method="POST">
        
                         <div className="input-field"> 
                           
                                   <input style={{color:"white",borderWidth:2,borderColor:'white'}} placeholder="Name" id="name" type="text" name="name"/>
                            </div>
        
                                 
                            <div className="input-field"> 
                                  <input style={{color:"white",borderWidth:2,borderColor:'white'}} placeholder="E-mail" id="email" type="email" name="_replyto"/>
                            </div>
        
                            <div className="input-field"> 
                           
                                <textarea style={{color:"white",borderWidth:2,borderColor:'white'}} placeholder="Message" id="message" type="text" name="message" />
                            </div>
        
        
                                    <div className="input-field">
                                        <input className="btn  lighten-1 z-depth-0" type="submit" value="Send"/>
                                    </div>
                            </form> 
            </div>

       </div>
   );

}
 }
 

export default ContactForm