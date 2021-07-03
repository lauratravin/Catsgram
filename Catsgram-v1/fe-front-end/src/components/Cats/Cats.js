import React, { Component } from 'react';
import Cat from './Cat'

// Class Component

// class Cats extends Component {

//   render() {
//     const { catsList }   = this.props; //destructuring  
//     // console.log(catsList)
//     const catsAll= catsList.map( cat => {
//          return(
//            <div className="catsGrid">
//              <Cat cat={cat} key={cat.id} voteCat={this.props.voteCat} fav={this.props.fav}/>
//              </div>
//          )
//         }  
//     )
//     return(<div className="rankingGrid"> {catsAll} </div>)
//   }
// };

// export default Cats;

// Functional component

const Cats = (props) => {
         
          //  console.log("Cats props", props)
          
       
          const { catsList }   = props; //destructuring  
          // debugger
          const catsAll= catsList.map( cat => {
              return(
                <div className="catsGrid">
                  <Cat cat={cat} key={cat.id} voteCat={props.voteCat} fav={props.fav}/>
                  </div>
              )
            })
          return(<div className="rankingGrid"> {catsAll} </div>)
}
    
  
export default Cats;