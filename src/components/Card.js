import React from 'react';

const Card = props => {
        return (
            <div className="card" style={{boxShadow: 'none'}}>
              <div className="card-image">
                <figure className="image is-2by1">
                  {/* <img src="https://bulma.io/images/placeholders/1280x960.png" /> */}
                  <img src={props.src} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media center">
                  <div className="media-left">
                    <figure className="image is-48x48">
                        <img className="is-rounded is-64x64" src={props.authSrc} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-5">How to develop better habits</p>
                    <p className="subtitle is-6">Pranay Aryal</p>
                  </div>
                </div>
                <div className="content" style={{fontSize: '90%'}}>
                    Forget resolutions, these are simple tricks.<br/>
                    <span className="has-text-grey subtitle-is-8"><time dateTime="2019-01-01">1 Jan 2019</time> . 20 min read</span>

                </div>
              </div>

            </div>
        );
};

export default Card