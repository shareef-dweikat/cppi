import React from 'react';
 import './blog.css'
import { withRouter} from "react-router-dom";
// import LazyLoad from 'react-lazyload';
import logo from '../../imgs/CONTACT-FORM.png'


function BlogCard(props) {
   
   return ( 
      
        <div className="blog-card"
            
             style={{marginBottom:32,
                    visibility:props.v?'hidden':'visible'
            }}
         >
            {/* <LazyLoad offset={-50}> */}
                <div className="blog-card-container"> 
                    <img src={logo} width="300px" alt="not found"/>

                    <div className="blog-card-text">
                         <div>
                            <h2>{props.title}</h2>
                            <div>{props.desc}</div>
                            <a href="./blogDetails/#top">
                                 <button 
                                       style={{
                                          marginTop:10,
                                          borderRadius:25,
                                          padding:"16px 34px 16px 34px",
                                          backgroundColor:'#fed804',
                                          borderColor:'#fed804',
                                          fontSize:12
                                       }}
                                       
                                       >
                              
                                    
                                   VIEW BLOG
                                 
                                 </button>
                            </a>

                            </div> 
                   </div>
                </div> 
                {/* </LazyLoad> */}
        </div>
     
  );
}

export default withRouter(BlogCard);
