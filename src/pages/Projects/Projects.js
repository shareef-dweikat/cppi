import React from 'react';
import "react-image-gallery/styles/css/image-gallery-no-icon.css";
import Concert from './Concert';
import HumanitarianProjects from './HumanitarianProjects';
import CsProjects from './CsProjects';

// import BlogCard from '../Blog/BlogCard';

function Projects() {
  

   return (
        <div>

            {/* <div  className="blog-header">
               
           </div>  */}
       
           <div  style={{padding:32,paddingTop:50,backgroundColor:'black',color:'white'}}>
              <Concert/>
              <div style={{display:'flex',justifyContent:'center'}}>
                <CsProjects />
              </div>
              <div style={{display:'flex',justifyContent:'center'}}>
                <HumanitarianProjects />
              </div>
            </div>
         
        </div>
  );
}

export default Projects;


