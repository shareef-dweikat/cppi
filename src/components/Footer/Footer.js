import React from 'react';
 import logo from '../../imgs/FOOTER.png'



class  Footer extends React.Component {
 
    render(){
       
        
        return ( 
            <div  style={{backgroundColor:'#e6e6e6',height:100,padding:8}}>
                    <div className="row">
                        <div style={{width:'40%',float:'left',textAlign:'center'}}>
                                Center for Proactive Peacemaking<br/>
                                International 2019
                        </div>
                        <div style={{width:'20%',float:'left',color:'#e6e6e6'}}>
                            .
                        </div>
                        {/* <div style={{display:'flex',justifyContent:'right'}}> */}
                        <div style={{width:'40%',float:'left',textAlign:'right'}}>

                            <div style={{textAlign:'center'}}>
                                5011 Terry Lane<br/>
                                Lakeland Florida<br/>
                                33813
                            </div>
                        </div>
                    </div>
                </div>
        );

    }
 }
 

export default Footer