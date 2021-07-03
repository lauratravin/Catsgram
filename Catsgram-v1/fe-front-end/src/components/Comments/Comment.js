import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteComment } from '../../actions/deleteComment'


class Comment extends Component {
  
  handleOnClick = () => {
    this.props.deleteComment(this.props.comment.id,this.props.comment.cat_id)
    

  }
  render() {
    const { comment } = this.props;

    return (
      <div className="commentList">
        
           <p> {comment.comment} </p>  <button onClick={this.handleOnClick}> x </button>
        
      </div>
    );
  }
};



 const mapDispatchToProps = dispatch => {
  return {
    deleteComment: (d,c) => dispatch(deleteComment(d,c))
  } 
 }
 
export default connect(null,mapDispatchToProps)(Comment);