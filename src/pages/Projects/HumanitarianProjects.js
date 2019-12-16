import React from 'react';
 import './projects.css'
import { withRouter} from "react-router-dom";
import ImageGallery from 'react-image-gallery';

import img1 from '../../imgs/food/img1.jpg'
import th1 from '../../imgs/food/th1.jpg'

import img2 from '../../imgs/food/img2.jpg'
import th2 from '../../imgs/food/th2.jpg'

import img3 from '../../imgs/food/img3.jpg'
import th3 from '../../imgs/food/th3.jpg'

import img4 from '../../imgs/food/img4.jpg'
import th4 from '../../imgs/food/th4.jpg'

import img5 from '../../imgs/food/img5.jpg'
import th5 from '../../imgs/food/th5.jpg'

import img6 from '../../imgs/food/img6.jpg'
import th6 from '../../imgs/food/th6.jpg'

import img7 from '../../imgs/food/img7.jpg'
import th7 from '../../imgs/food/th7.jpg'

import img8 from '../../imgs/food/img8.jpg'
import th8 from '../../imgs/food/th8.jpg'

import img9 from '../../imgs/food/img9.jpg'
import th9 from '../../imgs/food/th9.jpg'

import img10 from '../../imgs/food/img10.jpg'
import th10 from '../../imgs/food/th10.jpg'

import img11 from '../../imgs/food/img11.jpg'
import th11 from '../../imgs/food/th11.jpg'

import img12 from '../../imgs/food/img12.jpg'
import th12 from '../../imgs/food/th12.jpg'

import img13 from '../../imgs/food/img13.jpg'
import th13 from '../../imgs/food/th13.jpg'

import img14 from '../../imgs/food/img14.jpg'
import th14 from '../../imgs/food/th14.jpg'

import img15 from '../../imgs/food/img15.jpg'
import th15 from '../../imgs/food/th15.jpg'

import img16 from '../../imgs/food/img16.jpg'
import th16 from '../../imgs/food/th16.jpg'

import img17 from '../../imgs/food/img17.jpg'
import th17 from '../../imgs/food/th17.jpg'

import img18 from '../../imgs/food/img18.jpg'
import th18 from '../../imgs/food/th18.jpg'

import img19 from '../../imgs/food/img19.jpg'
import th19 from '../../imgs/food/th19.jpg'


import img20 from '../../imgs/food/img20.jpg'
import th20 from '../../imgs/food/th20.jpg'

import img21 from '../../imgs/food/img21.jpg'
import th21 from '../../imgs/food/th21.jpg'

import img22 from '../../imgs/food/img22.jpg'
import th22 from '../../imgs/food/th22.jpg'

import img23 from '../../imgs/food/img23.jpg'
import th23 from '../../imgs/food/th23.jpg'

import img24 from '../../imgs/food/img24.jpg'
import th24 from '../../imgs/food/th24.jpg'

import img25 from '../../imgs/food/img25.jpg'
import th25 from '../../imgs/food/th25.jpg'

import img26 from '../../imgs/food/img26.jpg'
import th26 from '../../imgs/food/th26.jpg'

import img27 from '../../imgs/food/img27.jpg'
import th27 from '../../imgs/food/th27.jpg'

import img28 from '../../imgs/food/img28.jpg'
import th28 from '../../imgs/food/th28.jpg'

import img29 from '../../imgs/food/img29.jpg'
import th29 from '../../imgs/food/th29.jpg'

import img30 from '../../imgs/food/img30.jpg'
import th30 from '../../imgs/food/th30.jpg'
function HumanitarianProjects(props) {
   
   const hImages = [
 
      {
        original:img2,
        thumbnail: th2,
        description:"Computer donation project to all girls school near Ramallah, West Bank...",
        originalClass:'gallary-image',

      },
      {
         original:img3,
         thumbnail: th3,
         description:"",
         originalClass:'gallary-image',
      },
      {
         original:img4,
         thumbnail: th4,
         description:"",
         originalClass:'gallary-image',
       },
       {
         original:img5,
         thumbnail: th5,
         description:"Kitchen of special needs orphange in Bethleham...",
         originalClass:'gallary-image',
       },
       {
         original: img1,
         thumbnail: th1,
         originalClass:'gallary-image',
         description:"CPPI's formula milk drive with help from students of Jerusalem School..."
       },
       {
         original: img6,
         thumbnail: th6,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img7,
         thumbnail: th7,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img8,
         thumbnail: th8,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img9,
         thumbnail: th9,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img10,
         thumbnail: th10,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img11,
         thumbnail: th11,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img12,
         thumbnail: th12,
         originalClass:'gallary-image',
         description:"CPPI's meat donation to families in need of village of Silwad, West Bank..."
       },
       {
         original: img13,
         thumbnail: th13,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img14,
         thumbnail: th14,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img15,
         thumbnail: th15,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img16,
         thumbnail: th16,
         originalClass:'gallary-image',
         description:"Food donation of formula milk, meat, cereal, vegetables, and rice, for special needs orphanage in Bethleham, West Bank..."
       },
       {
         original: img17,
         thumbnail: th17,
         originalClass:'gallary-image',
         description:"Food donation to special needs orphanage in Bethleham, West Bank..."
       },
       {
         original: img18,
         thumbnail: th18,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img19,
         thumbnail: th19,
         originalClass:'gallary-image',
         description:"Kitchen of special needs orphange in Bethleham..."
       },
       {
         original: img20,
         thumbnail: th20,
         originalClass:'gallary-image',
         description:"CPPI's meat donation to families in need of village of Silwad, West Bank... Meat, Flour, and Dates..."
       },
       {
         original: img21,
         thumbnail: th21,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img22,
         thumbnail: th22,
         originalClass:'gallary-image',
         description:"Formula milk drive in action near Ramallah, West Bank..."
       },
       {
         original: img23,
         thumbnail: th23,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img23,
         thumbnail: th23,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img24,
         thumbnail: th24,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img25,
         thumbnail: th25,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img26,
         thumbnail: th26,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img27,
         thumbnail: th27,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img28,
         thumbnail: th28,
         originalClass:'gallary-image',
         description:""
       },
       {
         original: img29,
         thumbnail: th29,
         originalClass:'gallary-image',
         description:""
       },   {
         original: img30,
         thumbnail: th30,
         originalClass:'gallary-image',
         description:""
       },
    ];
 
   return ( 
      
        <div style={{width:'60%',marginTop:150}}>
           <h5>Humanitarian Projects</h5>
             <ImageGallery items={hImages} />
        </div>
     
  );
}

export default HumanitarianProjects
