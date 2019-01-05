import React from 'react';
import '../blog.scss';
// import '../Debug.css'
import Pink from '../images/pink-mountain.jpg'
import Backdrop from '../images/antique-backdrop-background-733853.jpg'
import Mountain from '../images/mountain-hero.jpg'
import Me from '../images/me.jpg'


const Blog = props => {
return (
    <div>
        <section className="section is-paddingless-horizontal">
            <div className="container grid">
               <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li className="is-active"><a href="#" aria-current="page">
                            How to build a beautiful blog 
                        </a></li>
                    </ul>
                </nav>
            </div>
        </section>
        <section className="section is-paddingless-horizontal" style={{paddingTop: 0}}>
            <div className="container grid">
                <article className="center">
                    <figure className="media-left">
                        <figure className="image is-64x64">
                            {/* <img  className="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" /> */}
                            <img  className="image is-rounded is-64x64" src={Me} />
                        </figure>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>Pranay Aryal</strong>
                                <a>@pranayaryal</a><br/>
                                <span className="has-text-grey">Learn fast, inspired to learn<br/>
                                <time datetime="2018-12-30">Dec 30, 2018</time> . 20 min read </span>
                            </p>
                        </div>
                    </div>
                </article>
                <div className="section is-paddingless-horizontal">
                    <h1 className="title is-2">Back to Stone Age</h1>
                    <h2 className="subtitle is-3">Using a stone grinder</h2>
                </div>

                <figure className="columns is-mobile is-marginless is-variable is-2 grid-xl">
                    <div className="column">
                        <figure className="image card">
                            <img  src={Mountain} />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image card">
                            <img src={Pink} />
                        </figure>
                    </div>
                    <div className="column">
                        <figure className="image card">
                            <img src={Backdrop} />
                        </figure>
                    </div>
                </figure>
                <figcaption className="level">
                   <small className="level-item has-text-grey">Some random pictures here</small>
                </figcaption>

                <div className="content is-medium">
                    <p>
                        If you're like me, you're interested in the web and its overwhelming reach,
                        but you're also inundated with the mess of information that is learning
                        HTML and CSS.
                        The thing is, these languages are unlike other domains, like Word
                        Processors and Programming Languages.  
                        <strong>  The web is another world</strong>, and it's not the prettiest thing.
                    </p>
                    <p>
                        Having learned me some web, I'm here to give a gentle push of encouragement,
                         because, <strong>with a little guidance</strong>, these domains can be a
                         lot easier than you imagine.
                         Continue reading, and we'll build a beautiful blog from scratch.
                         We'll also learn some CSS Grid, flexbox, and Responsive Design.
                    </p>
                </div>
            </div>
        </section>
        
    </div>
)
};
export default Blog;