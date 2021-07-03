import React, { Component } from 'react';
import { connect } from 'react-redux';
import Catupdate from './Catupdate';


class List extends Component {


 


        render(){
         console.log(" cats ", this.props.cats)

            const catslist =  this.props.cats.map( c => {
                return(        
                    <div>        
                        <Catupdate  cat_id={c.id} cat_name={c.name} image={c.image} />       
                      
                    </div>    
                 )
            })
            return(<h1>{catslist}</h1>)
        }


}

const mapStateToProps = state => {
    //  console.log("the state", state)
    return {
     
      cats: state.cats
    }
}



export default connect(mapStateToProps)(List)