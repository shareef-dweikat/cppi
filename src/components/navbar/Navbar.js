import React from 'react';
//  import './rnvbar.scss'
import logo from '../../imgs/cppi-logo-transparent-.png'
import logoWhite from '../../imgs/cppi-logo-transparent-white.png'

import './navbar.css'

class  Navbar extends React.Component {
    state={
        mynavclass:'topnav',
        c:0,
        flag:false,
        logo:logo,
        logoFlag:true
    }
     myFunction=()=> {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        // this.setState({logoFlag:!this.state.logoFlag})
      }
    myInterval=()=>{
        setInterval(()=>{
            let element=document.getElementById("mynav")

            let rect=element.getBoundingClientRect();
            alert(rect.top)
            if(rect.top <0){
                
                this.setState({ mynavclass:'cc'})
            }
         } ,1000)

    }
    render(){
       
        window.onscroll =  (e)=> {  
           

            if(  window.scrollY==0){
               
                // this.state.c= this.state.c+1
                this.setState({ mynavclass:'topnav',logo:logo})

            }else{
                this.setState({ mynavclass:'topnav topnav-moving',logo:logoWhite})

            }
  
            } 


    return ( 
        <div>
            <div className={this.state.mynavclass} id="myTopnav">
                 <a></a>
                <a href="/contact">Contact</a>
                <a href="/blog">Blog</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
                <a href="/">Home</a>
                <a  style={{fontSize:15,backgroundColor:'rgba(0,0,0,0)'}} className="icon" onClick={this.myFunction}>&#9776;</a>
                {this.state.logoFlag?   <div style={{padding:8}}>
                    <img className="logo" src={this.state.logo} />
                </div>:''}

            </div>

        </div>
   );

}
 }
 

export default Navbar