export const addComment = (data) => {
    return (dispatch) => {  
      fetch('http://127.0.0.1:3000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(cat => {
        dispatch({type: 'ADD_COMMENT', cat: cat});
      })
    }
  }

  