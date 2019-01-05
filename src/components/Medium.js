import React from 'react';
import cardHeadings from '../cardHeadings';
import Me from '../images/me.jpg';
import Mountain from '../images/mountain-hero.jpg';
import Cobblestone from '../images/cobblestone.jpg';
import '../medium.scss';
import Card from './Card';
import MediaObject from './MediaObject';
import CardWithMedia from './CardWithMedia';

const Medium = props => {
    return (
        <div>
            <div className="container grid">
                <div className="columns-nav is-mobile">
                    <p className="nav-column left">Medium</p>
                    <ul className="right">
                        <li className="icon"><i className="fas fa-search"></i></li>
                        <li className="icon"><i className="fas fa-bell"></i></li>
                        <li className="desktop"><button className="button is-normal">Upgrade</button></li>
                        <li className="icon"><i className="fas fa-user"></i></li>
                    </ul>
                </div>
                <div className="columns-nav is-marginless">
                    <ul className="left has-text-weight-light is-uppercase" style={{ letterSpacing: '0.05em', fontSize: '15px' }}>
                        <li>Home</li>
                        <li>Love/Hate</li>
                        <li>Culture</li>
                        <li>Food</li>
                        <li>Design</li>
                        <li>Startups</li>
                    </ul>
                </div>
            </div>
            <div className="container grid-xl">
                <div className="columns-nav">
                    <div className="column">
                        <Card src={Mountain} authSrc={Me} />
                    </div>
                    <div className="column">
                        {
                            cardHeadings.map((card) =>
                                <div className="is-marginless">
                                    <MediaObject heading={card.heading}
                                        key={card.date}
                                        author={card.author}
                                        minRead={card.minRead}
                                        date={card.date} 
                                        imgOrientation="left"
                                        size="64x64"/>
                                </div>

                            )
                        }
                    </div>
                    <div className="column">
                        <Card src={Mountain} authSrc={Me} />
                    </div>
                </div>
            </div>
            <div className="container grid">
                <hr />
                <div className="columns" >
                    <div className="column is-two-thirds">
                        <MediaObject heading='How To Make A Living On The Internet'
                            author='Taimur'
                            minRead='2 min read'
                            date='Nov 22, 2018' 
                            imgOrientation="right"
                            description="How do I upload images with React?"
                            size="128x128"/>
                        <MediaObject heading='How To Make A Living On The Internet'
                            author='Taimur'
                            minRead='2 min read'
                            date='Nov 22, 2018' 
                            imgOrientation="right"
                            description="How do I upload images with React?"
                            size="128x128"/>
                        <MediaObject heading='How To Make A Living On The Internet'
                            author='Taimur'
                            minRead='2 min read'
                            date='Nov 22, 2018' 
                            imgOrientation="right"
                            description="How do I upload images with React?"
                            size="128x128"/>
                        
                    </div>
                    <div className="column">
                        <CardWithMedia authSrc={Me} src={Cobblestone} />
                        <br/>
                        <p className="title is-5">Popular on our Blog</p>
                        <CardWithMedia authSrc={Me} src={Cobblestone} />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Medium
