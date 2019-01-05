import React from 'react';
import '../App.scss';
import Books from '../images/book-svg.svg'


const ModifiedHero = props => {
return (
    <div>
      <section className="hero is-fullheight">
        <nav className="hero-head">
          <div className="columns is-mobile is-marginless heading has-text-weight-bold">
            <div className="nav-column left">
              <figure className="navbar-item image">
                <img src={Books} style={{height: '12rem', width: '6.5rem'}}/>
              </figure>
            </div>
            <div className="nav-column center desktop">
                <p className="navbar-item has-text-black">Technology</p>
                <p className="navbar-item has-text-black">MODEL X</p>
                <p className="navbar-item has-text-black">MODEL 3</p>
                <p className="navbar-item has-text-black">MODEL ROADSTER</p>
                <p className="navbar-item has-text-black">ENERGY</p>
            </div>
            <div className="nav-column right ">
              <p className="navbar-item desktop has-text-black">SHOP</p>
              <p className="navbar-item desktop has-text-black">SIGN IN</p>
              <figure className="navbar-item image">
                <i className="fas fa-3x fa-bars has-text-black"
                  style={{width: '1rem', height: '1rem'}}></i>
              </figure>
            
            </div>
          </div>

        </nav>
        <header className="hero-body">
          <div className="is-overlay has-text-centered" style={{top: '400px'}}>
            <h1 className="subtitle is-4 has-text-weight-light has-text-black">Pranay Aryal</h1>
            <h2 className="title is-4 has-text-black">Software Developer</h2>
          </div>
        </header>

        <main className="hero-foot center" style={{padding: '2rem'}}>
          <div id="grid" style={{width: '768px'}}>
            <div id="a">
              <p className="has-text-centered has-text-white">
              Follow me on Twitter
              </p>
            </div>
            <div id="b" className="center-column">
              <p className="title has-text-white">
                <i className="fas fa-tachometer-alt has-text-grey-light"
                  style={{width: '0.75em', height: '0.75em'}}></i>
                  1.9<span className="is-size-5">s</span>
              </p>
              <p className="subtitle has-text-white is-7">0-60 mph</p>
            </div>
            <div id="c" className="center-column" style={{borderLeft: '1px solid black'}}>
              <p class="title has-text-white"><span class="is-size-5">+</span>250<span class="is-size-5">mph</span></p>
              <p class="subtitle is-7 has-text-white">Top Speed</p>
            </div>
            <div id="d" className="center-column" style={{borderLeft: '1px solid black'}}>
              <p className="title has-text-white">620<span className="is-size-5">mi</span></p>
              <p className="subtitle is-7 has-text-white">Mile Range</p>
            </div>
            <div id="e" className="center-column">
              <button  className="button is-danger is-inverted is-rounded is-outlined has-text-weight-bold"
                style={{width: '100%', border: '0.15em solid white'}}>
                Reserve Now
                </button>
            </div>
          </div>


        </main>
      </section>
        
    </div>
)
};
export default ModifiedHero
