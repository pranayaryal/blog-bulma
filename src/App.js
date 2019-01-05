import React, { Component } from 'react';
import Books from './images/book-svg.svg'
import ModifiedHero from './components/ModifiedHero'
import Blog from './components/Blog'
import Medium from './components/Medium';

// import './Debug.css'

class App extends Component {
  render() {
    return (
      <div>
        {/* <ModifiedHero /> */}
        {/* <Blog /> */}
        <Medium />
      </div>
    );
  }
}

export default App;
