import React, { Component } from 'react';
import Comments from '../../components/Comments/Comments';
import { connect } from 'react-redux'


class Cat extends Component {

handleOnClick = () => {
  this.props.voteCat(this.props.cat.id)
}

  render() {
    // console.log(this.props)
    const { cat } = this.props;
    if(this.props.fav == "true") {
      return (
        <div className="catRanking">
          
            <img src={cat.image}/>
            <p><span>NAME: {cat.name}</span></p>
            <p>VOTES: {cat.likes} </p>
        
      </div>  
      );
    }
    else {
      return (
    
        <div className="renderCat">
             <div className="bloque1">
                  <img src={cat.image}/>
                  <p>NAME: {cat.name}</p>
                  <p>CURRENT VOTES: {cat.likes}</p>
                  <button onClick={(e) => this.handleOnClick() }>Vote! </button>  
                  
            </div>
           
            <div className="bloque2">
                 <div>
                   
                     <Comments cat_comments={cat.comments} cat_id={cat.id}  addComment={this.props.addComment} deleteComment={this.props.deleteComment}/>
                    
                 </div>
            </div>
           
        </div>
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    cats: state.cats
  }
}


export default connect(mapStateToProps)(Cat);