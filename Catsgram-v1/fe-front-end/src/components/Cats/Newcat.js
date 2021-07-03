import React, { Component } from 'react';



const Newcat = (props) => {
    console.log("input props",props)
           
             return( 
                <div key={props.thisCat.id}>
      
                    <p> Name: {props.thisCat.name}</p>     
                    <img src={props.thisCat.image} />  
                </div>           
             )
}




export default  Newcat

