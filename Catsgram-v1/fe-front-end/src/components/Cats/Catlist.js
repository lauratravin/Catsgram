import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../../actions/catsFetch'
import {voteCat} from '../../actions/voteCat'
import { orderCats } from  '../../actions/orderCats'
import { searchCats } from  '../../actions/searchCats'
import Cats from './Cats'
import Cat from './Cat'

class Catlist extends Component {   

  constructor(props) {
    super(props);
    this.order = false;
    this.state = {
       cats: {}      
    }    
  }
 

    componentDidMount() {
       this.props.fetchCats(this.order)
          
    }
    
    


    handleLoading = () => {
    
      if(this.props.loading) {
        return <div>Loading...</div>
      } else { 
       
        return <Cats catsList={this.props.catsList} voteCat={this.props.voteCat}/>
      }
    }



    handleChange = (e) => {
        //  let letters = e.target.value.length

         let searchTerm = e.target.value
        //  const searchcat = this.props.catsList.filter( cat => cat.name.toLowerCase().slice(0, letters) == (e.target.value.toLowerCase()))
         
        //  this.setState({
        //    cats: searchcat
        //  })

         this.props.searchCats(searchTerm)
    }

    handleOrder = () => {        
          this.props.orderCats(this.props.catsList)
    }


  

    render() {
  
      return (
        <div className="catlistwrapper">     

            <div className="secondNav">
                  <div className="search">
                      <label>   SEARCH CAT </label>
                          
                          <input type="text"  onChange={(e => this.handleChange(e))} />
                   
                      <button onClick={this.handleOrder} className="orderButton"> Order by name </button>
                      </div>    
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
      voteCat: (cat) => dispatch(voteCat(cat)),
      orderCats: (catlist) => dispatch(orderCats(catlist)),
      searchCats: (searchTerm) => dispatch(searchCats(searchTerm))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Catlist)
  