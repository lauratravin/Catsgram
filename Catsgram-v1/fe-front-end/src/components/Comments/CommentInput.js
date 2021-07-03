import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/addComment'

class CommentInput extends Component {

  state = {
    text: '',
    catId: 0
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
      catId: this.props.catId
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} className="addCat" >
          <label>ADD NEW COMMENT</label><br/>
          <textarea
            rows="3" cols="85"
            maxLength= "150"
            placeholder="limit 150 characters..."
            type="textarea"
            value={this.state.text}
            onChange={this.handleOnChange} /><br/>
          <input type="submit" value="ADD"  />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (d) => dispatch(addComment(d))
  }
}

export default connect(null, mapDispatchToProps)(CommentInput)
