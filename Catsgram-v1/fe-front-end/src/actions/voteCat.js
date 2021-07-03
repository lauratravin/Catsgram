export const voteCat = (catId) => {
   
    // console.log(catId)
  
    return (dispatch) => {  
      fetch(`http://127.0.0.1:3000/cats/${catId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(catId)
      })
      .then(response => response.json())
      .then(
          response => dispatch({type: 'VOTE_CAT',catId}) )
         //response => console.log(response))
    }
  }
