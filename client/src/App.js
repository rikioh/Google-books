import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Search from './pages/Search'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper'
import Saved from './pages/Saved'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path='/' component={Search} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/saved' component={Saved} />
        </Wrapper>
      </div>
      
    </Router>

      
  )
}

export default App;
