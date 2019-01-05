import React from 'react';

const MediaObject = props => {
        const imgSrc = `https://bulma.io/images/placeholders/${props.size}.png`;
        console.log(props.size)
        const imgOrientation = props.imgOrientation;

        return (
        <div className="box" style={{boxShadow: 'none', paddingTop: '0'}}>
            {
                props.imgOrientation =="left"?

                    (
                  <article className="media center">
                    <figure className="media-left">
                        <p className={`image is-${props.size}`}>
                            <img src={imgSrc}/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                                <strong>{props.heading}</strong><br/>
                                <small>{props.author}</small><br/>
                                <small><time dateTime="2019-01-01">{props.date}</time> . {props.minRead} min read</small>

                        </div>
                        
                    </div>
                  </article>
                    
                    ):(

                  <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <span className="title is-5"><strong>{props.heading}</strong></span><br/>
                            <small className="has-text-grey">{props.description}</small><br/>
                            <small>{props.author}</small><br/>
                            <small className="has-text-grey"><time dateTime="2019-01-01">{props.date}</time> . {props.minRead} min read</small>

                        </div>
                        
                    </div>
                    <figure className="media-right">
                        <p className={`image is-${props.size}`}>
                            <img src={imgSrc}/>
                        </p>
                    </figure>
                  </article>
                    )
            }
        </div>
    )
};

export default MediaObject
