
const catsReducer = (state = { cats: [], loading: false }, action) => {
 
      console.log("State before action",state)
      console.log("action", action)
    
    switch(action.type) {
      case 'LOADING_CATS':
        return {
          ...state,
          cats: [...state.cats],
          loading: true
        }

      case 'FETCH_CATS':
      
        return {
            ...state,
            cats: action.cats,
            loading: false
          }       

      case 'ADD_CAT':
        return {
          ...state,
          cats: [...state.cats, action.cat],
          current:  action.cat
        }

     case 'ADD_COMMENT':
        let cat1 = state.cats.map(cat => {
            if (cat.id === action.cat.cat_id) {
                cat.comments = [...cat.comments, action.cat]
                return cat
            } else {
                return cat
            }
          })
        
          return { 
                ...state, 
                cats: cat1 
          }
     case 'DELETE_COMMENT': 
         { 
              //  console.log(action.data)
               let catId= action.data.cat
               let commentId= action.data.comment
               let cat1 = state.cats.map(cat => {
                    if (cat.id === catId) {
                      cat.comments = cat.comments.filter( comment => comment.id !== commentId )
                      return cat
                   } else {
                       return cat
                   }
               })
               return { 
                ...state, 
                cats: cat1 
          }
          }
    
    case 'VOTE_CAT':
        {
            // console.log(action)
            let cats = state.cats.map( cat => {
                if ( cat.id === action.catId){
                    cat.likes+= 1
                    return cat
                } else {
                    return cat
                }
            })
            return {...state, cats: cats}
        }
     case 'UPDATE_CAT':
       {
        console.log("response", action.response.id)
        let cats = state.cats.map( cat => {
          if ( cat.id === action.response.id){
              cat.likes+= 1
              return cat
          } else {
              return cat
          }
      })
      return {...state, cats: cats}
        // return state
       }
     case 'SEARCH_CATS':
       {
        let length =  action.searchTerm.length

        let catSearch = state.cats.filter(cat => cat.name.toLowerCase().slice(0, length) ==  action.searchTerm.toLowerCase()) 
        
    
         return{
           ...state,
           cats: catSearch
         } 
 
       }
     case 'ORDER_CATS':
       {               
          let orderCats =  [... state.cats.sort( ( a,b ) => (a.name.localeCompare(b.name) ) )]
          //[... ] used to create a new array, otherwise React think it is the same state despite that order of elements has changed.
          //other way is like below
          // let orderCats2 =  state.cats.sort( ( a,b ) => (a.name.localeCompare(b.name) ) )
          //  let newcatArray = [...orderCats2] this must be asssing to cats: in the return
          
          
          // console.log("orderCats",orderCats)   
          // console.log("orderCats2",orderCats2)  
          return { 
            ...state, 
            cats: orderCats
           }      
         
     }

     default:
            return state;
    }
  }
  
  export default catsReducer;