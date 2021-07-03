export const changeKittyName = (newName, catId) => {
     

   //   return {
   //      type:  currentState
   //   }

   //   const catid = currentState.catId;
   //   const newname = currentState.name;


    // console.log("cat name", newName)
  
     return(dispatch) => {

        fetch(`http://127.0.0.1:3000/cats/${catId}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({name: newName, changename: true})
           })
          .then(response => response.json())
          .then(
            response => dispatch({type: 'UPDATE_CAT', response}) )
     
    }



}

