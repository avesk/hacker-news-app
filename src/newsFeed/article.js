import React, { Component } from 'react';

class Article extends Component {

    render() {
        return(
            <article className="news-article">
                <h2 className="title">Bitcoin Spontaneously Combusts Leaving Users in Shock & Disamy</h2>
                <p className="time-stamp">March 11th 2018</p>
                <p className="author">Satoshi Yakamoto</p>
            </article>
        );
    }

}

export default Article;
