export const addCat = (data) => {
    console.log('Data: ', data)
    return (dispatch) => {
  //    console.log('c')

      fetch('http://127.0.0.1:3000/cats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(cat => {
    //    console.log('d')
        return dispatch({
          type: 'ADD_CAT',
          cat: cat
        })     
      })
      .catch((error) => {
        console.log('Error creating cat:', error)
      })
     // console.log('e')
    }
    return data
  }