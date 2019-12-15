import React, { Component } from 'react';
import './about.css';
import heroVideoDesktop from '../../imgs/ABOUT-1350X650.mp4'
import HomeDesckTopHd from '../../imgs/ABOUT-1440X800.mp4'
import HomeMOBILELANDSCAPE from '../../imgs/ABOUT-700X375.mp4'
import HomeMOBILEPORTRAIR from '../../imgs/ABOUT-375X700.mp4'
import HomeTABLET from '../../imgs/ABOUT-768-1024.mp4'
import HomeTA from '../../imgs/ABOUT- 1014X600.mp4'
class AboutPage extends React.Component{
  chooseImage=()=>{
    if (window.innerWidth>window.innerHeight && window.innerWidth<=1023){//mobile landscape
     
      return     <source src={HomeMOBILELANDSCAPE} type="video/mp4" />
  
    }
  //  else if(window.innerWidth>window.innerHeight &&  window.innerWidth>=1024) { //ipad landspace
  //       // return    <source src={HomeDesckTopHd} type="video/mp4" />
  //   }
    else if( window.innerWidth>1025) { //desktop
      return     navigator.appVersion.indexOf("Mac")!= -1?  <source src={HomeDesckTopHd} type="video/mp4" />:   <source src={heroVideoDesktop} type="video/mp4" />
      // return <source src={heroVideoDesktop} type="video/mp4" />
    }
    else if (window.innerHeight>window.innerWidth &&window.innerWidth>1000){ //ipad portrait
       return     <source src={HomeTABLET} type="video/mp4" />
    }
     else if (window.innerWidth>1000){ //ipad portrait
      return     <source src={HomeTA} type="video/mp4" />
    }
    
    else if (window.innerWidth>700){ //ipad portrait
      return     <source src={HomeTABLET} type="video/mp4" />
    }
   
    else{ //mobile portrait
      return     <source src={HomeMOBILEPORTRAIR} type="video/mp4" />
  
    }
  
  
  }
  render(){
      return (
            <div style={{backgroundColor:'black'}}>
             
                <video   id="myVideo" width="100%"   autoPlay="autoPlay" loop="loop">
                {this.chooseImage()}

                </video> 
            </div>
      );
  }
}
export default AboutPage;
