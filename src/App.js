import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import heroVideoDesktop from './imgs/HOME-HERO-DESKTOP.mp4'
import HomeDesckTopHd from './imgs/HOME-1440X789.mp4'
import HomeMOBILELANDSCAPE from './imgs/700X375.mp4'
import HomeMOBILEPORTRAIR from './imgs/375X700.mp4'
import HomeTABLET from './imgs/Home-Tablet-Portrait.mp4'
// import Home-TabletLandscape from './imgs/Home-Tablet-Landscape.mp4'

import HomeTA from './imgs/HERO-1014X600.mp4'

import WhoWeAre from './components/whoWeAre/WhoWeAre';
import OurProjects from './components/ourprojects/OurProjects';
import ContactForm from './components/contactForm/ContactForm';
class App extends React.Component{

 componentDidMount(){
    var vid = document.getElementById("myVideo");
    vid.playbackRate = 3; 
 }
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
                {/* {navigator.appVersion.indexOf("Mac")!= -1?   <source src={HomeDesckTopHd} type="video/mp4" />:   <source src={heroVideoDesktop} type="video/mp4" />} */}
                {this.chooseImage()}
              </video> 
              
              <WhoWeAre/>
              <OurProjects/>
              <ContactForm/>
            </div>
      );
  }
}
export default App;
