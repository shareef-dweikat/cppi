import React from 'react';
 import './ourprojects.css'
import logo1 from '../../imgs/test test3.png'
import logo2 from '../../imgs/test test2.png'

import logo3 from '../../imgs/test test.png'

import Card from './Card'


class  OurProjects extends React.Component {
   
    render(){
       
           
    return ( 
       <div style={{padding:8}}>
           <div style={{color:'white',fontSize:42,textAlign:'center',margin:54}}>
                OUR PROJECTS
            </div>
            
            <div className="projects-cards">
                <Card img={logo1}/>
                <Card img={logo2}/>
                <Card img={logo3}/>

            </div>

       </div>
   );

}
 }
 

export default OurProjects