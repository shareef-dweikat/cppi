import React from 'react';
 import './blog.css'
import logo from '../../imgs/CONTACT-FORM.png'
import SocialMedia from './SocialMedia'


function BlogDetails() {
   
   return (
            <div className="blog-details blog-content">
                
                    <section id="top" name="top"/>
                  <div className="row">
                      <div className="blog-details-column">
                              <img  src={logo} width="60%" alt="not found" />
                      </div>
                      <div className="blog-details-column">
                              <h1 style={{fontSize:'4vw'}}>Our First Blog Post</h1>
                              <p style={{fontSize:'3vw'}}>Welcome to our brand new website!</p>
                              <SocialMedia myPaddingRight={'5%'}/>                         

                      </div>
                  </div>

                  <div>

                        <p style={{lineHeight:2,textIndent:20}}>
                                We hope you are just as excited as we are to have a modern website that is fully responsive on all devices. We would like to express how thankful we are to <a href="http://soulutionkey.com" style={{color:'blue'}}>soulutionkey.com</a> for their website design, website development, and digital marketing expertise. 
                        </p>
                        <p style={{lineHeight:2,textIndent:20}}>
                                    The purpose of this website is not only to attract new patients but to stand as a digital guide to health and wellness for our East Cobb & Marietta community. We are planning to post one blog per week, and our blogs will include a podcast, a 2-minute explainer video, and the article itself. The blogs will cover a wide range of topics from neck pain to keeping a healthy diet.
                        </p>
                  </div>
            </div>
   )
}

export default BlogDetails;
