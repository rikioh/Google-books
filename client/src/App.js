import React from "react";
import Search from './pages/search'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper'
import Saved from './pages/saved'


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
