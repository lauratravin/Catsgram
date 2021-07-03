import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../../actions/catsFetch'
import Cats from './Cats'

class CatWinners extends Component {   

  constructor(props) {
    super(props);
    this.order = true;
  }

  
    componentDidMount() {
      //  console.log(this.props)
      this.props.fetchCats(this.order)
    }
    
    handleLoading = () => {
      // console.log(this.props.loading)
      if(this.props.loading) {
        return <div>Loading...</div>
      } else {        
        return <Cats catsList={this.props.catsList} fav="true"/>
      }
    }
  
    render() {
      const order = true
    // console.log("render state in catlist",this.props)
      return (
        <div>       
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
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CatWinners)
  