export const deleteComment = (comment , cat_id) => {
    
    console.log('delete hello', comment, cat_id)
    
    return (dispatch) => {  
      fetch(`http://127.0.0.1:3000/comments/${comment}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(
          
           response => {
             const data= { comment: comment, cat: cat_id}
             dispatch({type: 'DELETE_COMMENT', data })
             console.log(response)
             }
         
      )
     }
    
  }