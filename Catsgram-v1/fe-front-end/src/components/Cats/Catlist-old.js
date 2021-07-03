import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../../actions/catsFetch'
import {voteCat} from '../../actions/voteCat'
import Cats from './Cats'
import Cat from './Cat'

class Catlist extends Component {   

  constructor() {
    super();
    this.order = false;
    this.state = {
          showcat: false,
          ordercat: false,
          searchcat: {},
          catOrder: {}
          
    }    
    this.xx = {}  
  }
 

    componentDidMount() {
      this.props.fetchCats(this.order)
    }
    
    handleLoading = () => {
      // console.log(this.props.loading)
      
      // debugger
      if(this.props.loading) {
        return <div>Loading...</div>
      } else { 
       
        if (this.state.showcat) {
       
          //this.state.searchcat
          this.xx= this.state.searchcat 
        } else {
            
          this.xx= this.props.catsList
          // this.props.catsList
        }
        if (this.state.ordercat){
          this.xx= this.state.catOrder
        }
        return <Cats catsList={this.xx} voteCat={this.props.voteCat}/>
      }
    }

    handleChange = (e) => {
         let letters = e.target.value.length
         const searchcat = this.props.catsList.filter( cat => cat.name.toLowerCase().slice(0, letters) == (e.target.value.toLowerCase()))

         
         this.setState({
           showcat: true,
           searchcat: searchcat
         })
     
    }

    handleOrder = () => {
      console.log("sss",this.props.catsList)
          const orderCats =  this.props.catsList.sort( ( a,b ) => (a.name.localeCompare(b.name) ) )
       console.log("cat in order?", orderCats)
    
          this.setState({
             ordercat: true,
             catOrder: orderCats  
          })
    }


    render() {
      console.log("CatList props",this.props)
      return (
        <div>     
            <button onClick={this.handleOrder}> Order </button>
            <div className="search">
                <p>SEARCH CAT</p> 
                <input type="text"  onChange={(e => this.handleChange(e))} />
            </div>    
            {this.handleLoading()}
           
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      catsList: state.cats,
      loading: state.loading
    }
  }
  

  const mapDispatchToProps = dispatch => {
    return {
      fetchCats: (order) => dispatch(fetchCats(order)),
      voteCat: (cat) => dispatch(voteCat(cat))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Catlist)
  