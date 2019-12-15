import React from 'react';
 import './card.css'
// import logo from '../imgs/logo.png'
import img from '../../imgs/test.jpg'


class  Card extends React.Component {
   
    render(){
       
           
    return ( 
       <div className="projct-card">

        <div className="column-prodect-card">
            <img className="image-cropper"
                 src={this.props.img}
                      
            />
             <hr className="project-line" style={{borderWidth:0.5,borderColor:'D8D8D8',marginTop:16}}/>

        </div> 

        <div className="column-prodect-card">

            <div 
                style={{
                    textAlign:'center',
                    borderStyle:'solid',
                    borderColor:'white',
                    padding:8,
                    margin:'auto',
                    marginTop:60,
                    borderRadius:5,
                    borderWidth:1,
                    width:'60%',
                    color:'white'
                    }}>

                LEARN MORE
            </div>
        </div> 
       </div>
   );

}
 }
 

export default Card