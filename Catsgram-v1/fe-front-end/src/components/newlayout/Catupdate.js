import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeKittyName } from '../../actions/changeKittyName';

class Catupdate extends Component{

    
      constructor(props) {
        super(props);
        this.state = {
            name: this.props.cat_name,
          
            catId: 0,
            oldname: props.cat_name
        };
        
      }
     
handleChange(e){
    // console.log( e.target.value)
    // console.log( e.target.id)
    this.setState({
        name: e.target.value,
        catId: e.target.id
    })
}

handleOnSumbit = e => {
    e.preventDefault()
    // console.log(this.state)
    if (this.props.cat_name !== this.state.name) {
      this.props.changeKittyName(this.state.name, this.state.catId)
      this.setState({
        oldname: this.state.name
      })
    }
    else alert("you dont change the name") 
}

render(){
    return(
       <div className="updateKitty">
           <form onSubmit={this.handleOnSumbit} > 
                    <div>
                       <img src={this.props.image}/> 
                    </div>
                    <div>
                    <input 
                      type="text"
                      id={this.props.cat_id} 
                    //   value= {this.props.cat_name}
                      value= {this.state.name}
                      onChange = {(e)=>this.handleChange(e) }
                      /> <br/>
                      <p>I am {this.state.oldname}</p>
                      </div>
                      <div>
                      <button type="submit" >Update</button></div>
           </form>           
        </div> 
    )
}


}

const mapDispatchToProps = dispatch => {
    return {
        changeKittyName: (newName, catId) => dispatch(changeKittyName(newName, catId))
    }
}



export default connect(null,mapDispatchToProps)(Catupdate)