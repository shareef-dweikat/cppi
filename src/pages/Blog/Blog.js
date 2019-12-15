import React from 'react';
import './blog.css'
import BlogCard from '../../pages/Blog/BlogCard';

function Blog() {
   
   return (
        <div>

            {/* <div  className="blog-header">
               
           </div>  */}
       
           <div   style={{padding:32,paddingTop:50,backgroundColor:'black',color:'white'}}>
           {/* <img  className="blog-header-img" src={img} style={{padding:'80px 25% 3%',width:'90vw'}} /> */}
               <h1 style={{marginTop:100,marginBottom:50}}>Welcome to Our Podcast & Blog Page</h1>
                  <BlogCard title="Our First Blog Post" desc="Welcome to our brand new website!..."/>
                  {/* <BlogCard title="Blog Title" desc="222222222"/>
                  <BlogCard title="Blog Title" desc="333333333"/>
                  <BlogCard title="Blog Title" desc="444444444444"/>
                  <BlogCard v={true} title="Blog Title" desc="4444444"/> */}

           </div>
         
        </div>
  );
}

export default Blog;


