import React from 'react';

const CardWithMedia = props => {
        return (
        <div>
            <div className="card" style={{boxShadow: 'none'}}>
              <div className="card-image" >
                <figure className="image-in-card is-2by1" style={{padding: '25% 4%'}}>
                  {/* <img src="https://bulma.io/images/placeholders/1280x960.png" /> */}
                  {/* <img src={props.src} /> */}
                  <p className="title is-5">New from your network</p>
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
                    <span className="title is-6">How to develop better habits</span><br/>
                    <span className="subtitle-is-7">Pranay Aryal</span><br/>
                    <small>Nov 29, 2018 * 2 min read</small>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                        <img className="is-rounded is-64x64" src={props.authSrc} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-6">How to develop better habits</p>
                    <small>Dec 19, 2018 * 2 min read</small>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
};

export default CardWithMedia;