
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../../actions/addCat'
import Cat from './Cat'
import Newcat from './Newcat'



class CatInput extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      image: '',
      showcat: false
    };
  }
 


  handleChange(e){
   this.setState({ 
    [e.target.id]: e.target.value
   
    })
 
  }

  handleOnSubmit(e){
    e.preventDefault();
    if ( this.state.name || this.state.image){
      // console.log(this.state)
              this.props.addCat(this.state)
              
              this.setState({  //reset
                name: '',
                image: '',
                showcat: true
              })

     } else {
       alert("complete name and url")
     }
  }

  
  render() {
  

    return (
      <div className="newCatForm">
          <form onSubmit={(e)=> this.handleOnSubmit(e) } >
              <label>CAT NAME</label><br/>
              <input  type="text" 
                      
                      id= "name"
                      value={this.state.name}  
                      onChange={(e => this.handleChange(e))}/><br/>
            
              <label>IMAGE (url) </label><br/>
              <input  type="text" 
              // <input type="file"
                      id= "image"
                      value={this.state.image}  
                      onChange={(e => this.handleChange(e))}/><br/>
              <input type="Submit"  value="Add" />
          </form>

          <div id="kitty" >
              {
                 this.state.showcat ? 
                      <Newcat thisCat={this.props.thisCat} /> : null
              }
       
          
            
          </div>
      </div>       
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addCat: (d) => dispatch(addCat(d))
   
  }
}
 const mapStateToProps = state => {
   return { thisCat: state.current } 
 }

export default connect(mapStateToProps, mapDispatchToProps)(CatInput)

CatInput.defaultProps = {
  thisCat: { name: "", image: ""}
};

