import logo from './logo.svg';
import './App.css';
// import { Router } from 'react-router';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';

import CatsContainer from './containers/CatsContainer';

import CatInput from './components/Cats/CatInput';

import FavContainer from './containers/FavContainer'

import Header from './containers/Header';
import Footer from './containers/Footer';

import List from './components/newlayout/List';
import './App.css';




function App() {

  
  return (
  
    <Router>
           <div>
              <Header/>
              <NavBar />
               {/* first page that loads */}
              <Route exact path="/" component={CatsContainer} />  
              <Route exact path="/catscontainer" component={CatsContainer} />
              <Route exact path="/newcat" component={CatInput}  />
             
              <Route exact path="/favcontainer" component={FavContainer} />
              <Route exact path="/test" component={List} />
              <Footer/>

           </div>
    </Router>

  );
}

export default App;
