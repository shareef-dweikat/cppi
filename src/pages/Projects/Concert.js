import React from 'react';
 import './projects.css'
import { withRouter} from "react-router-dom";
// import LazyLoad from 'react-lazyload';


function Concert(props) {
   
   return ( 
      
        <div>

           <div style={{margin:'auto',width:'80%'}}>
               <h5 style={{marginTop:150,marginBottom:50}}>CPPI Annual Peace Concerts</h5>
               <p>
                  CPPI, Jerusalem School, and Peter Yarrow of Peter, Paul and Marry, hold an annual peace concert in Jerusalem. The concert is performed by Palestinian, Israeli, and international singers all coming together in order to promote peace in the region.
               </p>
               <p>
                  In this video presentation from our 2012 concert Petter Yarrow performs with students from Jerusalem School. They sing a re-written version of an old American classic " This Land is your Land". The re-written version ,by Ross Byars, expresses how the land should be seen as a land for both parties of the conflict. 
               </p>
               
               <div style={{display:'flex',justifyContent:'center',marginTop:100}}>
                  <iframe style={{margin:'auto',width:'80%',height:600}} src="https://www.youtube.com/embed/DeBI4HzPwZo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
            </div>
        </div>
     
  );
}

export default Concert
