import React from 'react';
//  import './blog.css'
import { withRouter} from "react-router-dom";
// import LazyLoad from 'react-lazyload';
import {WEBSITE_LINK} from '../../API'
import facebookIcon from '../../imgs/facebook-square-brands.svg'

import twitterIcon from '../../imgs/twitter-brands.svg'

function BlogCard(props) {
   const myStyle={
     color:'white',
      fontSize:20,
      backgroundColor:'#3b5998',
      borderStyle:'solid',
      borderColor:'#3b5998',
      borderRadius:6,
      paddingTop:'0.8vw',
      // paddingBottom:8,
      paddingRight:props.myPaddingRight,
      borderWidth:2,
      marginRight:16
      }
      console.log(props.match.path)
   return ( 
      <div>
    <div style={{fontSize:15,margin:'8px 8px 8px 0px'}}> Sharing is caring</div>

    <a  href={`https://www.facebook.com/sharer/sharer.php?u=${WEBSITE_LINK}${props.match.path}`} target="_blank">
   
    <img src={facebookIcon} width="40" style={{marginRight:16}}  />

        {/* <span  style={myStyle}>
          <img src={facebookIcon} width="25"  />
          <span style={{paddingLeft:16,fontWeight:'bold',fontSize:15}}>Share</span>
        </span>  */}
      
    </a>

<a className="twitter-share-button"
  href={`https://twitter.com/intent/tweet?url=${WEBSITE_LINK}${props.match.path}`}
  data-size="large">
            <img src={twitterIcon} width="40"  />

       {/* <span  style={{...myStyle,backgroundColor:'#00acee',borderColor:'#00acee'}}>
          <img src={twitterIcon} width="25"   />
          <span style={{paddingLeft:16,fontWeight:'bold',fontSize:15}}>Share</span>
          </span>  */}

    </a>
</div>    
  );
}

export default withRouter(BlogCard);


