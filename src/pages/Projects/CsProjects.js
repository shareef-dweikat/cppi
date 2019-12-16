import React from 'react';
 import './projects.css'
import { withRouter} from "react-router-dom";
import ImageGallery from 'react-image-gallery';
// import LazyLoad from 'react-lazyload';


function CsProjects(props) {
     const csImages = [
          {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
          },
          {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
          },
          {
             original: 'https://picsum.photos/id/1019/1000/600/',
             thumbnail: 'https://picsum.photos/id/1019/250/150/',
           },
           {
             original: 'https://picsum.photos/id/1019/1000/600/',
             thumbnail: 'https://picsum.photos/id/1019/250/150/',
           },
           {
             original: 'https://picsum.photos/id/1019/1000/600/',
             thumbnail: 'https://picsum.photos/id/1019/250/150/',
           },
           {
             original: 'https://picsum.photos/id/1019/1000/600/',
             thumbnail: 'https://picsum.photos/id/1019/250/150/',
           },
           {
             original: 'https://picsum.photos/id/1019/1000/600/',
             thumbnail: 'https://picsum.photos/id/1019/250/150/',
           },
           {
             original: 'https://picsum.photos/id/1018/1000/600/',
             thumbnail: 'https://picsum.photos/id/1018/250/150/',
           },
           {
             original: 'https://picsum.photos/id/1018/1000/600/',
             thumbnail: 'https://picsum.photos/id/1018/250/150/',
           },
        ];
 
   return ( 
      
        <div style={{width:'60%',marginTop:150}}>
          <h5>Computer Science Education</h5>
             <ImageGallery items={csImages} />
        </div>
     
  );
}

export default CsProjects
